import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";

export const metadata = {
  title: "Login — Zapletter",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="pt-16 sm:pt-24">
          <Container className="max-w-lg">
            <div className="rounded-[14px] bg-[var(--z-surface)]/80 border border-white/10 p-6 sm:p-8 elevate">
              <div className="mb-5 text-center">
                <h1 className="text-2xl font-semibold">Welcome back</h1>
                <p className="mt-2 text-white/70 text-sm">Sign in to continue to Zapletter</p>
              </div>
              <LoginForm />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
