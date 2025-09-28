export default function FeatureCard({ title, children, icon }) {
  return (
    <div className="rounded-[12px] bg-[var(--z-surface)]/80 border border-white/10 p-5 sm:p-6 transition-transform hover:-translate-y-1 elevate">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 grid place-items-center rounded-md bg-white/5 border border-white/10">
          {icon}
        </div>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="text-sm text-white/80 leading-relaxed">{children}</p>
    </div>
  );
}
