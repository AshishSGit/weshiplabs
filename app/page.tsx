import Hero from "@/components/landing/hero";
import StatsBar from "@/components/landing/stats-bar";
import Packages from "@/components/landing/packages";
import HowWeWork from "@/components/landing/how-we-work";
import Comparison from "@/components/landing/comparison";
import CaseStudiesPreview from "@/components/landing/case-studies-preview";
import ServicesPreview from "@/components/landing/services-preview";
import TechMarquee from "@/components/landing/tech-marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Packages />
      <HowWeWork />
      <Comparison />
      <CaseStudiesPreview />
      <ServicesPreview />
      <TechMarquee />
    </>
  );
}
