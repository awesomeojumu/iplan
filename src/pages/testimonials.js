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

export default function TestimonialsPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-16 md:gap-32">
        <Testimonials />
      </div>
    </div>
  );
}
