import Testimonials from "../components/Testimonials";
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
