import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import Features from "./components/features";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
    </main>
  );
}
