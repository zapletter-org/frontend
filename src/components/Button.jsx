export default function Button({
  children,
  as: Tag = "button",
  className = "",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] px-5 py-3 text-sm font-medium transition-all focus-ring select-none";
  const variants = {
    primary:
      "bg-[var(--z-accent)] text-white shadow-[0_8px_20px_rgba(255,69,0,0.25)] hover:shadow-[0_10px_24px_rgba(255,69,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60",
    ghost:
      "bg-transparent text-[var(--z-fg)] border border-white/10 hover:bg-white/5",
  };
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
