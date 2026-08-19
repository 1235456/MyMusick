export default function RotationCard({ rotation, onPlay }) {
  return (
    <div className="mr-rot-card" onClick={() => onPlay(rotation.ids, 0)}>
      <h3 className="mr-display">{rotation.name}</h3>
      <p>{rotation.desc}</p>
      <span className="count">{rotation.ids.length} kalaam · play rotation</span>
    </div>
  );
}
