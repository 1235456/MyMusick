import { useState } from "react";
import { MY_LIST, OTHER_SONGS } from "../data/songs";
import SongRow from "./SongRow";

export default function SongList({ currentId, isPlaying, onPlaySong }) {
  const [showAll, setShowAll] = useState(false);
  const visibleSongs = showAll ? OTHER_SONGS : OTHER_SONGS.slice(0, 6);

  return (
    <div className="mr-song-tabs-grid">
      <section id="my-list" className="mr-section mr-song-panel">
        <div className="mr-section-head">
          <div>
            <p className="mr-eyebrow">Your saved songs</p>
            <h2 className="mr-display">My List</h2>
          </div>
          <span className="hint">{MY_LIST.length} saved</span>
        </div>

        <div className="mr-songs">
          {MY_LIST.map((song, index) => (
            <SongRow
              key={song.id}
              song={song}
              index={index}
              isActive={song.id === currentId}
              isPlaying={isPlaying}
              onPlay={(songIndex) => onPlaySong(MY_LIST, songIndex)}
            />
          ))}
        </div>
      </section>

      <section id="other-songs" className="mr-section mr-song-panel mr-song-panel-catalog">
        <div className="mr-section-head">
          <div>
            <p className="mr-eyebrow">The full catalog</p>
            <h2 className="mr-display">Other Songs</h2>
          </div>
          <span className="hint">{OTHER_SONGS.length} tracks</span>
        </div>

        <div className="mr-songs">
          {visibleSongs.map((song, i) => (
            <SongRow
              key={song.id}
              song={song}
              index={i}
              isActive={song.id === currentId}
              isPlaying={isPlaying}
              onPlay={(songIndex) => onPlaySong(OTHER_SONGS, songIndex)}
            />
          ))}
        </div>

        {OTHER_SONGS.length > 6 && !showAll && (
          <button className="mr-songs-more" type="button" onClick={() => setShowAll(true)}>
            Show more songs
          </button>
        )}
      </section>
    </div>
  );
}
