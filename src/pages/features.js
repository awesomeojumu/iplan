import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CoreFeatures from "../components/CoreFeatures";
import Pricing from "../components/Pricing";
import QualityFeatures from "../components/QualityFeatures";
import Subscribe from "../components/Subscribe";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";
import Community from "../components/Community";
import Navbar from "../components/Navbar";
import PageHeroSection from "../components/pageherosections";

export default function FeaturesPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-1 md:gap-1">
      <PageHeroSection />
      <CoreFeatures />
      <Features />
      </div>
    </div>
  );
}
