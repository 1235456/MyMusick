import { Play, Pause } from "lucide-react";

export default function SongRow({ song, index, isActive, isPlaying, onPlay }) {
  return (
    <div
      className={`mr-song-row${isActive ? " active" : ""}`}
      onClick={() => onPlay(index)}
    >
      <span className="mr-song-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="mr-song-play" aria-hidden="true">
        {isActive && isPlaying ? <Pause size={13} /> : <Play size={13} style={{ marginLeft: 1 }} />}
      </span>

      <span className="mr-song-main">
        <div className="mr-song-title">{song.title}</div>
      </span>

      <span className="mr-song-tags">
        <b>{song.tag}</b>
        <span>{song.note}</span>
      </span>
    </div>
  );
}
