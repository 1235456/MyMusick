export default function NavBar() {
  return (
    <header className="mr-nav">
      <div className="mr-wordmark">
        <span className="mr-display en">Mehfil Radio</span>
        <span className="mr-urdu ur">محفل ریڈیو</span>
      </div>

      <nav className="mr-nav-links">
        <a href="#rotations">Rotations</a>
        <a href="#songs">All Qawwaliyan</a>
      </nav>

      <div className="mr-nav-listen">
        <a className="mr-pill" href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3m2VCe" target="_blank" rel="noopener noreferrer">
          Spotify
        </a>
        <a className="mr-pill" href="https://music.youtube.com/channel/UC1I-2S8ZDsRTBQCEIhcO0OQ" target="_blank" rel="noopener noreferrer">
          YT Music
        </a>
      </div>
    </header>
  );
}
