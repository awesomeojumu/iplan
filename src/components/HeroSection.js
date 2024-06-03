import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-35"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-2 mx-auto">
        {/* <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>Welcome to iPlan Solutions</p>
        </h1> */}

        <p className="text-3xl sm:text-4xl leading-normal my-5 md:my-1 font-bold">
           Welcome to iPlan Solutions
        </p>

        <p className="text-lg leading-normal my-4 md:my-2">
            Providing Professional Resume Writing and Comprehensive Business Planning Services to Empower Your Career and Business Success.
        </p>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-blue-900 hover:border-blue-900 hover:bg-transparent hover:text-blue-900 rounded-full">
          <Link href="#" target="_blank">
            Explore
          </Link>
        </button>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/hero.png"}
            width={800}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
