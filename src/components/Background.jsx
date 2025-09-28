export default function Background({
  position = "fixed", // "fixed" or "absolute"
  className = "",
  bgColor = "var(--z-bg)",
  grid1 = "var(--z-grid-1)",
  grid2 = "var(--z-grid-2)",
  spacing = 22, // px between lines within one axis
  thickness = 1, // px line thickness
  z = -10, // z-index so it's behind all content including nav
}) {
  const tile = spacing * 2; // overall tile size
  const posClass = position === "absolute" ? "absolute" : "fixed";

  return (
    <>
      <div
        className={`pointer-events-none ${posClass} inset-0 ${className}`}
        style={{ backgroundColor: bgColor, zIndex: z }}
      />
      <div
        className={`pointer-events-none ${posClass} inset-0 ${className}`}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${grid1} 0, ${grid1} ${thickness}px, transparent ${thickness}px, transparent ${spacing}px), repeating-linear-gradient(-45deg, ${grid2} 0, ${grid2} ${thickness}px, transparent ${thickness}px, transparent ${spacing}px)`,
          backgroundSize: `${tile}px ${tile}px`,
          zIndex: z,
        }}
      />
    </>
  );
}
