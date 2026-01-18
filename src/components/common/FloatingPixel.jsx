import "./style.scss";

const FloatingPixel = ({
  type = "diamond",
  color = "#000",
  top = "50%",
  left = "50%",
  duration = "6s",
}) => {
  return (
    <div
      className={`floatingPixel ${type}`}
      style={{
        top,
        left,
        animationDuration: duration,
      }}
    >
      {[...Array(type === "single" ? 1 : type === "diamond" ? 4 : 2)].map(
        (_, i) => (
          <span key={i} className="pixel" style={{ backgroundColor: color }} />
        )
      )}
    </div>
  );
};

export default FloatingPixel;
