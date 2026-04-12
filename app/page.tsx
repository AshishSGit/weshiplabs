import Hero from "@/components/landing/hero";
import StatsBar from "@/components/landing/stats-bar";
import Showcase from "@/components/landing/showcase";
import Bento from "@/components/landing/bento";
import Packages from "@/components/landing/packages";
import HowWeWork from "@/components/landing/how-we-work";
import Comparison from "@/components/landing/comparison";
import TechMarquee from "@/components/landing/tech-marquee";
import LatestInsights from "@/components/landing/latest-insights";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Showcase />
      <Bento />
      <Packages />
      <HowWeWork />
      <Comparison />
      <TechMarquee />
      <LatestInsights />
    </>
  );
}
