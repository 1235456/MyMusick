import { SONGS } from "../data/songs";
import SongRow from "./SongRow";

export default function SongList({ currentId, isPlaying, onPlaySong }) {
  return (
    <section id="songs" className="mr-section">
      <div className="mr-section-head">
        <div>
          <p className="mr-eyebrow">All Qawwaliyan</p>
          <h2 className="mr-display">Everything in the mehfil</h2>
        </div>
        <span className="hint">{SONGS.length} local tracks</span>
      </div>

      <div className="mr-songs">
        {SONGS.map((song, i) => (
          <SongRow
            key={song.id}
            song={song}
            index={i}
            isActive={song.id === currentId}
            isPlaying={isPlaying}
            onPlay={onPlaySong}
          />
        ))}
      </div>
    </section>
  );
}
