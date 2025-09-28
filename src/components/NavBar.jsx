"use client";
import Logo from "./Logo";
import Button from "./Button";
import Container from "./Container";

export default function NavBar() {
  return (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-lg backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#topics" className="hover:text-white">Examples</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button as="a" href="/login" variant="ghost">Login</Button>
          <Button as="a" href="#get-started">Get started</Button>
        </div>
      </Container>
    </header>
  );
}
