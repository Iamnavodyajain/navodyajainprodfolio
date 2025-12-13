// app/page.js
import Hero from '@/components/Hero';
import MetricsStrip from '@/components/MetricsStrip';
import FlagshipProduct from '@/components/FlagshipProduct';
import Capabilities from '@/components/Capabilities';
import ProductLifecycle from '@/components/ProductLifecycle';
import AnalyticsProjects from '@/components/AnalyticsProjects';
import DesignProject from '@/components/DesignProject';
import Recommendations from '@/components/Recommendations'; // Add this
import Writing from '@/components/Writing';
import FooterCTA from '@/components/FooterCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E0E0E]">
      <Hero />
      <MetricsStrip />
      <FlagshipProduct />
      <Capabilities />
      <ProductLifecycle />
      <AnalyticsProjects />
      <DesignProject />
      <Recommendations /> {/* Add this line */}
      <Writing />
      <FooterCTA />
    </main>
  );
}