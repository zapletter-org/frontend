import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SignupForm from "../../components/SignupForm";

export const metadata = {
  title: "Sign up — Zapletter",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="pt-16 sm:pt-24">
          <Container className="max-w-lg">
            <div className="rounded-[14px] bg-[var(--z-surface)]/80 border border-white/10 p-6 sm:p-8 elevate">
              <div className="mb-5 text-center">
                <h1 className="text-2xl font-semibold">Create your account</h1>
                <p className="mt-2 text-white/70 text-sm">Join Zapletter and start building better briefings</p>
              </div>
              <SignupForm />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
