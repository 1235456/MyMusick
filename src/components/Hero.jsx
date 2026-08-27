import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import NowPlaying from "./NowPlaying";
import YouTubePlayer from "./YouTubePlayer";

export default function Hero({ currentSong, isPlaying, hasStarted, iframeSrc, audioSrc, listeners, onToggle, onPrevious, onNext }) {
  const [playbackTime, setPlaybackTime] = useState({ current: 0, duration: 0 });
  const [seekTo, setSeekTo] = useState(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const [contributionAmount, setContributionAmount] = useState("50");
  const [amountError, setAmountError] = useState("");
  const currentTime = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(new Date());
  const upiId = "8810637435@ptsbi";
  const paymentAmount = Math.max(50, Number(contributionAmount) || 50);
  const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=Masti%20Music&am=${paymentAmount}&cu=INR`;

  useEffect(() => {
    setPlaybackTime({ current: 0, duration: 0 });
    setSeekTo(null);
  }, [audioSrc]);

  function handleSeek(value) {
    const nextTime = Number(value);
    setSeekTo(nextTime);
    setPlaybackTime((time) => ({ ...time, current: nextTime }));
  }

  return (
    <section className="mr-hero">
      <div className="mr-hero-bg" style={{ backgroundImage: "url('/masti-neon-night.svg')" }} />
      <div className="mr-hero-overlay" />

      {/*
      <StatusBar listeners={listeners} />
      <div className="mr-hero-content">
        <p className="mr-eyebrow" style={{ marginBottom: 6 }}>My Playlist · open every night</p>
        <h1 className="mr-display">My Playlist</h1>
        <div className="mr-urdu mr-hero-ur">मस्ती म्यूजिक — हर रात जारी</div>
        <p className="mr-hero-tag">Arijit Singh's most-loved songs, kept playing for every mood and every kind of night.</p>
        <NowPlaying currentSong={currentSong} isPlaying={isPlaying} hasStarted={hasStarted} onToggle={onToggle} playbackTime={playbackTime} onSeek={handleSeek} />
        <div className="mr-hero-links"><a className="mr-pill" href="#rotations">Rotations</a><a className="mr-pill" href="#songs">All songs</a></div>
      </div>
      */}

      <div className="mr-reference-top">
        <div className="mr-reference-status">
          <span className="mr-reference-time">{currentTime}</span>
          <span><span className="mr-dot" />— <b>{listeners}</b> online</span>
        </div>

        <div className="mr-reference-actions">
          <div className="mr-reference-links">
            <a href="#songs">Songs</a>
            <button
              type="button"
              className="mr-support-link"
              aria-label="Support My Playlist with a UPI payment"
              onClick={() => setSupportOpen(true)}
            >
              Support
            </button>
          </div>
        </div>

      </div>

      <div className="mr-reference-brand">
        <h1 className="mr-reference-title mr-display">My Playlist</h1>
        <p>Arijit Singh · songs for every kind of night</p>
      </div>

      <div className="mr-reference-player">
        <NowPlaying currentSong={currentSong} isPlaying={isPlaying} hasStarted={hasStarted} onToggle={onToggle} playbackTime={playbackTime} onSeek={handleSeek} />
        <div className="mr-reference-player-controls">
          <button type="button" aria-label="Previous track" onClick={onPrevious}>|◀</button>
          <button type="button" aria-label="Play or pause" onClick={onToggle}>{isPlaying ? "❚❚" : "▶"}</button>
          <button type="button" aria-label="Next track" onClick={onNext}>▶|</button>
        </div>
      </div>

      <div className="mr-reference-bottom">
        <span>MY PLAYLIST</span>
        <span>ARJIT SINGH RADIO</span>
      </div>

      {/* The player remains hidden visually while YouTube supplies the audio stream. */}
      <div className="mr-reference-hidden-copy">
        <p>Arijit Singh songs, kept playing round the clock.</p>
      </div>

      <YouTubePlayer
        src={iframeSrc}
        audioSrc={audioSrc}
        currentSong={currentSong}
        isPlaying={isPlaying}
        hasStarted={hasStarted}
        seekTo={seekTo}
        onToggle={onToggle}
        onPrevious={onPrevious}
        onNext={onNext}
        onEnded={onNext}
        onTimeUpdate={(current, duration) => setPlaybackTime({ current, duration })}
      />

      {supportOpen && (
        <div className="mr-support-backdrop" role="presentation" onClick={() => setSupportOpen(false)}>
          <div className="mr-support-dialog" role="dialog" aria-modal="true" aria-labelledby="support-title" onClick={(event) => event.stopPropagation()}>
            <button className="mr-support-close" type="button" aria-label="Close support dialog" onClick={() => setSupportOpen(false)}>×</button>
            <p className="mr-eyebrow">Support My Playlist</p>
            <h2 id="support-title" className="mr-display">Send a contribution</h2>
            <p>Scan this QR code with any UPI app to support the music:</p>
            <label className="mr-amount-label" htmlFor="contribution-amount">Contribution amount (minimum ₹50)</label>
            <div className="mr-amount-input">
              <span aria-hidden="true">₹</span>
              <input
                id="contribution-amount"
                type="number"
                min="50"
                step="10"
                value={contributionAmount}
                onChange={(event) => {
                  setContributionAmount(event.target.value);
                  setAmountError("");
                }}
                onBlur={() => {
                  const enteredAmount = Number(contributionAmount);
                  if (contributionAmount && enteredAmount < 50) {
                    setAmountError("Minimum payment is ₹50. Please enter ₹50 or more.");
                    return;
                  }
                  setContributionAmount(String(paymentAmount));
                }}
              />
            </div>
            {amountError && <p className="mr-amount-error" role="alert">{amountError}</p>}
            <div className="mr-upi-qr">
              <QRCodeSVG value={upiUrl} size={190} bgColor="#f4e9d3" fgColor="#1c130f" level="M" title={`UPI payment for ${upiId}`} />
            </div>
            {/* <strong className="mr-upi-id">{upiId}</strong> */}
            <a className="mr-support-open" href={upiUrl}>Open UPI app</a>
          </div>
        </div>
      )}
    </section>
  );
}
