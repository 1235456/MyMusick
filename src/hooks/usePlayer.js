import { useState, useEffect, useMemo } from "react";
import { SONGS, songById } from "../data/songs";

/**
 * Owns the queue, playback state, the fake "listeners" counter, and the
 * YouTube embed src. Any component can call playQueue/togglePlay without
 * knowing how playback is implemented under the hood.
 */
export function usePlayer() {
  const [queue, setQueue] = useState(SONGS.map((s) => s.id));
  const [queueIndex, setQueueIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [listeners, setListeners] = useState(0);

  // fake "who's listening right now" counter
  useEffect(() => {
    setListeners(214 + Math.floor(Math.random() * 60));
    const t = setInterval(() => {
      setListeners((c) => {
        const next = c + Math.floor(Math.random() * 7) - 3;
        return next < 90 ? 90 : next;
      });
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const currentId = queue[queueIndex];
  const currentSong = songById(currentId);

  const iframeSrc = useMemo(() => {
    if (!hasStarted || currentSong?.audioSrc) return "";
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `https://www.youtube.com/embed/${currentId}?autoplay=${isPlaying ? 1 : 0}&rel=0&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(origin)}`;
  }, [currentId, currentSong, isPlaying, hasStarted]);

  function playQueue(ids, startIndex) {
    setQueue(ids);
    setQueueIndex(startIndex);
    setIsPlaying(true);
    setHasStarted(true);
  }

  function togglePlay() {
    if (!hasStarted) {
      playQueue(queue, queueIndex);
      return;
    }
    setIsPlaying((p) => !p);
  }

  function changeTrack(direction) {
    setQueueIndex((index) => (index + direction + queue.length) % queue.length);
    setIsPlaying(true);
    setHasStarted(true);
  }

  function previousTrack() {
    changeTrack(-1);
  }

  function nextTrack() {
    changeTrack(1);
  }

  return {
    currentId,
    currentSong,
    isPlaying,
    hasStarted,
    listeners,
    iframeSrc,
    audioSrc: currentSong?.audioSrc || "",
    playQueue,
    togglePlay,
    previousTrack,
    nextTrack,
  };
}
