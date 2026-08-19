import "./styles.css";
import { SONGS } from "./data/songs";
import { usePlayer } from "./hooks/usePlayer";

import Hero from "./components/Hero";
import About from "./components/About";
import SongList from "./components/SongList";
import Footer from "./components/Footer";

export default function MehfilRadio() {
  const { currentId, currentSong, isPlaying, hasStarted, listeners, iframeSrc, audioSrc, playQueue, togglePlay, previousTrack, nextTrack } = usePlayer();

  function handlePlaySong(index) {
    playQueue(SONGS.map((s) => s.id), index);
  }

  return (
    <div className="mr-app">
      <Hero
        currentSong={currentSong}
        isPlaying={isPlaying}
        hasStarted={hasStarted}
        iframeSrc={iframeSrc}
        audioSrc={audioSrc}
        listeners={listeners}
        onToggle={togglePlay}
        onPrevious={previousTrack}
        onNext={nextTrack}
      />

      <About />
      {/* <Rotations onPlayRotation={playQueue} /> */}
      <SongList currentId={currentId} isPlaying={isPlaying} onPlaySong={handlePlaySong} />
      <Footer />
    </div>
  );
}
