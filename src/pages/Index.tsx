import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { SolanaSection } from '@/components/sections/SolanaSection';
import { LiquidityProvidersSection } from '@/components/sections/LiquidityProvidersSection';
import { DevelopersSection } from '@/components/sections/DevelopersSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SolanaSection />
        <LiquidityProvidersSection />
        <DevelopersSection />
        <VisionSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
