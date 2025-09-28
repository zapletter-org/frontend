import Image from "next/image";

export default function Logo({ size = 28 }) {
  return (
    <div className="inline-flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Zapletter logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
      <span className="text-base font-semibold tracking-tight">Zapletter</span>
    </div>
  );
}
