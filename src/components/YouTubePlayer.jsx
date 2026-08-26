import { useEffect, useRef } from "react";

export default function YouTubePlayer({ src, audioSrc, isPlaying, hasStarted, seekTo, onTimeUpdate }) {
  const audioRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const onTimeUpdateRef = useRef(onTimeUpdate);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    onTimeUpdateRef.current = onTimeUpdate;
    isPlayingRef.current = isPlaying;
  }, [isPlaying, onTimeUpdate]);

  useEffect(() => {
    if (!hasStarted || audioSrc || !iframeRef.current) return;

    let cancelled = false;
    let intervalId;

    function startPlayer() {
      if (cancelled || !window.YT?.Player || playerRef.current) return;

      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            onTimeUpdateRef.current(0, event.target.getDuration());
            if (isPlayingRef.current) event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) onTimeUpdateRef.current(0, event.target.getDuration());
          },
        },
      });
      intervalId = window.setInterval(() => {
        const player = playerRef.current;
        if (player?.getCurrentTime && player.getDuration) {
          onTimeUpdateRef.current(player.getCurrentTime(), player.getDuration());
        }
      }, 250);
    }

    if (window.YT?.Player) {
      startPlayer();
    } else {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        startPlayer();
      };
      const script = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!script) {
        const apiScript = document.createElement("script");
        apiScript.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(apiScript);
      }
    }

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [audioSrc, hasStarted]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || !isPlaying) return;
    player.playVideo?.();
  }, [isPlaying]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || isPlaying) return;
    player.pauseVideo?.();
  }, [isPlaying]);

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

  useEffect(() => {
    if (audioSrc || seekTo === null) return;
    playerRef.current?.seekTo?.(seekTo, true);
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
      ref={iframeRef}
      title="Masti Music player"
      src={src}
      allow="autoplay; encrypted-media"
      referrerPolicy="strict-origin-when-cross-origin"
      className="mr-yt-hidden"
    />
  );
}
