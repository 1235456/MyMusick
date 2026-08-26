import { useState } from "react";
import { SONGS } from "../data/songs";
import SongRow from "./SongRow";

export default function SongList({ currentId, isPlaying, onPlaySong }) {
  const [showAll, setShowAll] = useState(false);
  const visibleSongs = showAll ? SONGS : SONGS.slice(0, 6);

  return (
    <section id="songs" className="mr-section">
      <div className="mr-section-head">
        <div>
          <p className="mr-eyebrow">The Masti playlist</p>
          <h2 className="mr-display">Arijit Singh, on repeat</h2>
        </div>
        <span className="hint">{SONGS.length} songs to feel</span>
      </div>

      <div className="mr-songs">
        {visibleSongs.map((song, i) => (
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

      {SONGS.length > 6 && !showAll && (
        <button className="mr-songs-more" type="button" onClick={() => setShowAll(true)}>
          Show more songs
        </button>
      )}
    </section>
  );
}
