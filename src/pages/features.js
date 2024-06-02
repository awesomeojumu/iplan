import Features from "../components/Features";
import CoreFeatures from "../components/CoreFeatures";
import Navbar from "../components/Navbar";

export default function FeaturesPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-16 md:gap-32">
        <Features />
        <CoreFeatures />
      </div>
    </div>
  );
}
