import Background from "./Background";

export default function ZapBackground(props) {
  return (
    <Background
      bgColor="#0f0f0f"
      grid1="rgba(255, 140, 0, 0.12)"
      grid2="rgba(255, 69, 0, 0.08)"
      spacing={22}
      thickness={1}
      {...props}
    />
  );
}
