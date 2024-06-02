import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-5 sm:gap-10 items-center justify-center h-full mt-20 sm:mt-10 md:mt-20"
      id="home"
    >
      <div className="w-full relative">
        {/* <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/hero.png"}
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
