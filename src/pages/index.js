import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-16 md:gap-32">
        <HeroSection />

        <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-20 gap-20">
          <div className="flex flex-col gap-2 flex-1">

            <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
              We keep the promise of <span className="text-blue-900">Excellence or Nothing</span>
            </h2>
            <p className="text-lg">
                iPlan Solutions combines expertise in resume writing and business planning to help individuals and businesses achieve their goals. Whether you’re a job seeker needing a standout resume or a business looking for strategic guidance, we offer tailored solutions to meet your needs.
            </p>
          </div>
        </section>

        
        <section className="relative container px-7 md:px-12 mx-auto">
            <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
              <div className="relative w-full flex-1">
                <Image
                  src={"/home-23.jpg"}
                  width={300}
                  height={300}
                  alt="banner"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex gap-5 md:gap-10 flex-col flex-1">
                <div className="flex flex-col gap-4">
                  <span className="service-name text-center lg:text-left">
                    OUR SERVICES
                  </span>
                  <h2 className="text-3xl md:text-3xl font-bold text-center lg:text-left">
                    Planning Solutions
                  </h2>
                </div>
                <ServiceCard
                  imgSrc={"/features/3.svg"}
                  title="iPlan Business Development"
                  desc="provides customized business planning and strategic advisory services to fuel growth and maximize success."
                />
                <ServiceCard
                  imgSrc={"/features/2.svg"}
                  title="iPlan Resume/CV"
                  desc="offers professional resume writing services tailored to optimize job search success. Our ATS-friendly resumes are careful crafted to elevate your profile and stand out to potential employers. Whether you're a seasoned professional or a recent graduate."
                />
              </div>
            </div>
          </section>
          {/* 
                IPlan Business Development
          */}

        <section className="container mx-auto px-7 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-blue-900 uppercase block font-semibold tracking-widest">
                iPlan Business Development
              </span>
              <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
                  Drive business growth with tailored planning and strategic insights.
              </h2>
              <p className="text-lg leading-loose">
                  Ready to elevate your business strategy? Explore our tailored solutions and unleash the full potential of your enterprise today.
              </p>
              <button href= "/business" className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-blue-900 hover:border-blue-900 hover:bg-blue-900 hover:shadow-blue-900 hover:shadow-2xl rounded-full">
              <Link href="/business">
                  Explore
              </Link>
              </button>
            </div>

            <div className="flex-1 relative w-full">
              <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.jpg')]">
                <Image
                  src={"/home-bd.jpg"}
                  width={300}
                  height={300}
                  alt="core features"
                  className="object-cover w-full md:w-[90%] xl:w-4/5"
                />
              </div>
            </div>
          </section>

          {/* 
          
          IPlan Business Development
          
          */}

          <section className="container mx-auto px-7 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-blue-900 uppercase block font-semibold tracking-widest">
                iPlan Resume/CV
              </span>
              <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
                  Elevate your job search with expertly crafted, ATS-friendly resumes.
              </h2>
              <p className="text-lg leading-loose">
                 Let our expert team craft a standout resume that opens doors to new opportunities. Ready to take the next step in your career?
              </p>
              <button className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-blue-900 hover:border-blue-900 hover:bg-blue-900 hover:shadow-blue-900 hover:shadow-2xl rounded-full">
                <Link href="/resume">
                  Explore
              </Link>
              </button>
            </div>

            <div className="flex-1 relative w-full">
              <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.jpg')]">
                <Image
                  src={"/home-cv.jpg"}
                  width={400}
                  height={400}
                  alt="Smiling Lady"
                  className="object-cover w-full md:w-[90%] xl:w-4/5"
                />
              </div>
            </div>
          </section>
        <Footer />
      </div>
    </div>
  );
}
