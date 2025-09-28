import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import NewsletterForm from "../components/NewsletterForm";
import { StarIcon, ShieldIcon, ClockIcon, TrendingUpIcon, MailIcon, CheckIcon } from "../components/Icons";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 sm:pt-24">
          <Container className="max-w-5xl">
            <div className="fade-up text-center mx-auto max-w-5xl">
              <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Turn any topic into a comprehensive briefing in minutes.
              </h1>
              <p className="mt-4 text-white/80 text-base leading-relaxed max-w-4xl mx-auto">
                Zapletter’s secure curation engine discovers top sources, selects the most important articles, and produces detailed human‑style summaries. Save hours, improve coverage, keep everything verifiable.
              </p>
              <div className="mt-6 flex justify-center">
                <NewsletterForm />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">JWT-secured API</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">UUID-tracked</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Every source linked</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section id="features" className="mt-20">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold">Why Zapletter</h2>
              <Button as="a" href="#get-started" variant="ghost">
                Get started
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="Automated curation"
                icon={<TrendingUpIcon size={18} className="text-[#ff4500]" />}
              >
                Discovers top sources for any topic, selects the most important articles, and avoids duplicate stories across outlets.
              </FeatureCard>
              <FeatureCard
                title="Human-style summaries"
                icon={<StarIcon size={18} className="text-[#ff4500]" />}
              >
                Two-phase LLM pipeline produces rich, factual summaries with neutral tone and meaningful in-article images.
              </FeatureCard>
              <FeatureCard
                title="Transparent & auditable"
                icon={<ShieldIcon size={18} className="text-[#ff4500]" />}
              >
                Every item links to its source, persisted with UUID and timestamp. Reliable, verifiable, and reusable results.
              </FeatureCard>
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section id="how" className="mt-20">
          <Container>
            <h2 className="text-2xl font-semibold mb-6">How it works</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="Discover sources"
                icon={<TrendingUpIcon size={18} className="text-[#ff4500]" />}
              >
                Combine up to 5 high-signal listings per topic and extract up to 10 top articles with absolute URLs and images.
              </FeatureCard>
              <FeatureCard
                title="Select without duplicates"
                icon={<CheckIcon size={18} className="text-[#ff4500]" />}
              >
                Robust prompts enforce anti-duplication across outlets and neutrality—not biased toward “news” unless you ask.
              </FeatureCard>
              <FeatureCard
                title="Summarize for depth"
                icon={<MailIcon size={18} className="text-[#ff4500]" />}
              >
                Two-phase LLM summarization yields human-style, factual briefs that start directly with content—no meta fluff.
              </FeatureCard>
            </div>
          </Container>
        </section>

        {/* Quality & Reliability */}
        <section id="quality" className="mt-20">
          <Container>
            <h2 className="text-2xl font-semibold mb-4">Quality & reliability</h2>
            <ul className="grid gap-3 md:grid-cols-2 text-sm text-white/80">
              <li className="flex items-start gap-3"><ShieldIcon size={18} className="text-[#ff4500] mt-0.5" /> Secure JWT, multi-user, persistent sessions with UUIDs.</li>
              <li className="flex items-start gap-3"><CheckIcon size={18} className="text-[#ff4500] mt-0.5" /> Resilient JSON parsing, URL normalization, minimal logging.</li>
              <li className="flex items-start gap-3"><TrendingUpIcon size={18} className="text-[#ff4500] mt-0.5" /> Key rotation across up to 5 Gemini keys for reliability.</li>
              <li className="flex items-start gap-3"><ClockIcon size={18} className="text-[#ff4500] mt-0.5" /> Consistent API schema; extensible scheduling, caching, new sources.</li>
            </ul>
          </Container>
        </section>

        {/* Topics */}
        <section id="topics" className="mt-20">
          <Container>
            <h2 className="text-2xl font-semibold mb-6">Perfect for research topics</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["AI Research", "Market Analysis", "Tech Trends", "Policy Updates", "Industry News", "Product Research", "Academic Studies", "Competitive Intel"].map(
                (t) => (
                  <div
                    key={t}
                    className="rounded-[10px] bg-[var(--z-muted)]/60 border border-white/10 px-4 py-3 text-sm hover:-translate-y-0.5 transition-transform"
                  >
                    {t}
                  </div>
                )
              )}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <Container className="max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
            <FAQ />
          </Container>
        </section>

        {/* CTA */}
        <section id="get-started" className="mt-20">
          <Container>
            <div className="rounded-[14px] bg-[var(--z-surface)]/80 border border-white/10 p-6 sm:p-8 text-center elevate">
              <h3 className="text-xl font-semibold">Ready to streamline your research?</h3>
              <p className="mt-2 text-white/80">
                Join newsletter editors, analysts, and researchers saving hours with automated topic briefings.
              </p>
              <div className="mt-5 flex justify-center">
                <NewsletterForm id="cta" />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
