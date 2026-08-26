export default function StatusBar({ listeners }) {
  return (
    <div className="mr-statusbar">
      <span>
        <span className="mr-dot" />— <b>{listeners}</b> listeners right now
      </span>
      <span>a fan-made tribute layout, unaffiliated with the Khan family or any label</span>
    </div>
  );
}
