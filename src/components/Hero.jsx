import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import NowPlaying from "./NowPlaying";
import YouTubePlayer from "./YouTubePlayer";
import { BG_IMAGE } from "../assets/streetScene";

export default function Hero({ currentSong, isPlaying, hasStarted, iframeSrc, audioSrc, listeners, onToggle, onPrevious, onNext }) {
  const [playbackTime, setPlaybackTime] = useState({ current: 0, duration: 0 });
  const [seekTo, setSeekTo] = useState(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const currentTime = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(new Date());
  const upiId = "raghavendrapani36@oksbi";
  const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=Nusrat%20Fateh%20Ali%20Khan%20Mehfil&cu=INR`;

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
      <div className="mr-hero-bg" style={{ backgroundImage: `url(${BG_IMAGE})` }} />
      <div className="mr-hero-overlay" />

      {/*
      <StatusBar listeners={listeners} />
      <div className="mr-hero-content">
        <p className="mr-eyebrow" style={{ marginBottom: 6 }}>Nusrat Fateh Ali Khan Mehfil · open every night</p>
        <h1 className="mr-display">Nusrat Fateh Ali Khan Mehfil</h1>
        <div className="mr-urdu mr-hero-ur">محفل ریڈیو — ہر رات جاری</div>
        <p className="mr-hero-tag">Nusrat Fateh Ali Khan's qawwaliyan, kept playing the way they used to unfold in a packed mehfil.</p>
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
              aria-label="Support Nusrat Fateh Ali Khan Mehfil with a UPI payment"
              onClick={() => setSupportOpen(true)}
            >
              Support
            </button>
          </div>
        </div>

      </div>

      <div className="mr-reference-brand">
        <h1 className="mr-reference-title mr-display">Nusrat Fateh Ali Khan Mehfil</h1>
        <p>Nusrat Fateh Ali Khan Mehfil · open every night</p>
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
        <span>NUSRAT FATEH ALI KHAN MEHFIL</span>
        <span>OPEN ALL NIGHT</span>
      </div>

      {/* The player remains hidden visually while YouTube supplies the audio stream. */}
      <div className="mr-reference-hidden-copy">
        <p>Nusrat Fateh Ali Khan's qawwaliyan, kept playing round the clock.</p>
      </div>

      <YouTubePlayer
        src={iframeSrc}
        audioSrc={audioSrc}
        isPlaying={isPlaying}
        hasStarted={hasStarted}
        seekTo={seekTo}
        onTimeUpdate={(current, duration) => setPlaybackTime({ current, duration })}
      />

      {supportOpen && (
        <div className="mr-support-backdrop" role="presentation" onClick={() => setSupportOpen(false)}>
          <div className="mr-support-dialog" role="dialog" aria-modal="true" aria-labelledby="support-title" onClick={(event) => event.stopPropagation()}>
            <button className="mr-support-close" type="button" aria-label="Close support dialog" onClick={() => setSupportOpen(false)}>×</button>
            <p className="mr-eyebrow">Support the mehfil</p>
            <h2 id="support-title" className="mr-display">Send a contribution</h2>
            <p>Scan this QR code with any UPI app to support the mehfil:</p>
            <div className="mr-upi-qr">
              <QRCodeSVG value={upiUrl} size={190} bgColor="#f4e9d3" fgColor="#1c130f" level="M" title={`UPI payment for ${upiId}`} />
            </div>
            <strong className="mr-upi-id">{upiId}</strong>
            <a className="mr-support-open" href={upiUrl}>Open UPI app</a>
          </div>
        </div>
      )}
    </section>
  );
}
