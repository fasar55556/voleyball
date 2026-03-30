import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import LegendsSection from "@/components/LegendsSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <div className="section-divider" />
      <HistorySection />
      <div className="section-divider" />
      <LegendsSection />
      <div className="section-divider" />
      <CtaSection />
      <footer className="py-8 bg-card text-center">
        <p className="font-body text-muted-foreground text-xs tracking-wider uppercase">
          Волейбол: Исторический дискурс © 2026
        </p>
      </footer>
    </main>
  );
};

export default Index;
