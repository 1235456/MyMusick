import { useEffect, useRef } from "react";

export default function YouTubePlayer({ src, audioSrc, isPlaying, hasStarted, seekTo, onTimeUpdate }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current || !audioSrc || !hasStarted) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [audioSrc, hasStarted, isPlaying]);

  useEffect(() => {
    if (!audioRef.current || !audioSrc || seekTo === null) return;
    audioRef.current.currentTime = seekTo;
  }, [audioSrc, seekTo]);

  if (!hasStarted) return null;

  if (audioSrc) {
    return (
      <audio
        key={audioSrc}
        ref={audioRef}
        src={audioSrc}
        preload="none"
        className="mr-yt-hidden"
        onLoadedMetadata={(event) => onTimeUpdate(0, event.currentTarget.duration)}
        onTimeUpdate={(event) => onTimeUpdate(event.currentTarget.currentTime, event.currentTarget.duration)}
      />
    );
  }

  return (
    <iframe
      title="Mehfil Radio player"
      src={src}
      allow="autoplay; encrypted-media"
      referrerPolicy="strict-origin-when-cross-origin"
      className="mr-yt-hidden"
    />
  );
}
