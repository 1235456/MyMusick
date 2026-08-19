import { ROTATIONS } from "../data/songs";
import RotationCard from "./RotationCard";

export default function Rotations({ onPlayRotation }) {
  return (
    <section id="rotations" className="mr-section">
      <div className="mr-section-head">
        <div>
          <p className="mr-eyebrow">Rotations</p>
          <h2 className="mr-display">Pick a mood for the mehfil</h2>
        </div>
        <span className="hint">tap a card to start that rotation</span>
      </div>

      <div className="mr-rotations">
        {ROTATIONS.map((rot) => (
          <RotationCard key={rot.name} rotation={rot} onPlay={onPlayRotation} />
        ))}
      </div>
    </section>
  );
}
