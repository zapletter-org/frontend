import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 bg-[var(--z-muted)]/40">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/70">
        <Logo />
        <nav className="flex items-center gap-4">

        </nav>
        <p className="text-xs">© {new Date().getFullYear()} Zapletter. All rights reserved.</p>
      </Container>
    </footer>
  );
}
