import { Play, Pause } from "lucide-react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

export default function NowPlaying({ currentSong, isPlaying, hasStarted, onToggle, playbackTime, onSeek }) {
  const statusLabel = !hasStarted ? "Tap play to start the vibe" : isPlaying ? "Now playing" : "Paused";

  return (
    <div className="mr-nowplaying">
      <div className="mr-np-art">
        <div className={`mr-ring${isPlaying ? " playing" : ""}`} />
      </div>

      <div className="mr-np-meta">
        <p className="mr-eyebrow">{statusLabel}</p>
        <div className="mr-np-title">{currentSong ? currentSong.title : "—"}</div>
        <div className="mr-np-sub">
          {currentSong ? `${currentSong.tag} — ${currentSong.note}` : "—"}
          <span className="mr-np-time">{formatTime(playbackTime?.current)} / {formatTime(playbackTime?.duration)}</span>
        </div>
        <input
          className="mr-np-progress"
          type="range"
          min="0"
          max={playbackTime?.duration || 0}
          step="0.1"
          value={Math.min(playbackTime?.current || 0, playbackTime?.duration || 0)}
          onChange={(event) => onSeek(Number(event.target.value))}
          disabled={!playbackTime?.duration}
          aria-label="Song progress"
        />
      </div>

      <button className="mr-np-btn" onClick={onToggle} aria-label="Play or pause">
        {isPlaying ? <Pause size={17} fill="#1c130f" /> : <Play size={17} fill="#1c130f" style={{ marginLeft: 2 }} />}
      </button>
    </div>
  );
}
