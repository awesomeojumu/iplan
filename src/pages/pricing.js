import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-16 md:gap-32">
        <Pricing />
      </div>
    </div>
  );
}
