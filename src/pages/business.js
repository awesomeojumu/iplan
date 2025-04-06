import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardList, faUsers, faUserTie, faStar, faArrowAltCircleRight, faFileAlt, faChartLine, faMoneyBillAlt, faSitemap, faExclamationTriangle, faBrain, faLightbulb, faSearch, faCog, faBriefcase, faUser, faHandshake, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeroSection from "../components/pageherosections";
import Image from "next/image";

export default function BusinessPage() {
  return (
    <div>
      <Navbar />
          <div className="flex flex-col gap-10 md:gap-10">
          <PageHeroSection />
          <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-blue-900 uppercase block font-semibold tracking-widest">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-blue-900" /> iPlan Business
              </span>
              <h2 className=" capitalize text-2xl md:text-4xl xl:text-5xl font-bold my-3">
                  Welcome to iPlan Business
              </h2>
              <p>Your trusted partner in driving business growth and achieving strategic success. We specialize in providing tailored business planning and strategic advisory services to help businesses thrive and succeed in today's competitive landscape. Whether you're a startup looking for initial funding, an SME seeking growth strategies, or an established business aiming for expansion, we're here to guide you every step of the way.</p>
            </div>

              <div className="flex-1 relative w-full">
                <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
                  <Image
                    src={"/businesspage.jpg"}
                    width={300}
                    height={300}
                    alt="business page banner"
                    className="object-cover w-full md:w-[90%] xl:w-4/5"
                  />
                </div>
              </div>
            </section>

            <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-20 gap-20">
                <div className="flex flex-col gap-2 flex-1">

                  
                  <h2 className=" capitalize text-3xl md:text-3xl xl:text-4xl font-bold my-3">
                    
                    <FontAwesomeIcon icon={faHandshake} className="ml-2 text-blue-900 px-1" />
                    
                    Why Choose <span className="text-blue-900">iPlan Business?</span> 
                  </h2>
                  <p className="text-md">
                    iPlan Business Development is dedicated to empowering businesses with strategic planning and comprehensive advisory services. Our expert team provides tailored solutions designed to meet your unique needs and drive sustainable growth. Whether you're a startup seeking funding or an established business aiming for expansion, iPlan BD is here to help you achieve your goals.
                  </p>

                  <h2 className="capitalize text-2xl md:text-2xl xl:text-5xl font-bold my-3">
                  <FontAwesomeIcon icon={faClipboardList} className="ml-2 text-blue-900" /> Our Services : 
                  </h2>
                  <ol>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Business Plan Development:</strong> We create detailed, customized business plans to guide your business strategy and secure funding.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Market Research & Analysis:</strong> Gain deep insights into market trends and competitor strategies to make informed decisions.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Financial Forecasting & Planning:</strong> Develop robust financial projections and valuations to ensure your business's financial health.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Strategic Planning & SWOT Analysis:</strong> Identify strengths, weaknesses, opportunities, and threats to formulate effective strategies.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Risk Assessment & Mitigation:</strong> Proactively manage risks with comprehensive assessment and mitigation plans.</li>
                  </ol>

                  <h2 className="capitalize text-2xl md:text-2xl xl:text-5xl font-bold my-3">
                    Our Process
                  </h2>
                  <ol>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Initial Consultation:</strong> Understand your business needs and goals.</li>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Research & Analysis:</strong> Conduct thorough market research and financial analysis.</li>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Strategy Development:</strong> Formulate tailored business strategies and plans.</li>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Ongoing Support:</strong> Provide continuous support and updates to refine strategies.</li>
                  </ol>

                  <h2 className="capitalize text-lg md:text-lg xl:text-lg font-bold my-3"><FontAwesomeIcon icon={faUserTie} className="ml-2 text-blue-900" /> Get Started Today! </h2>
                  <p>Ready to elevate your business strategy and achieve your goals? Contact iPlan BD today to schedule your consultation and discover how our tailored solutions can drive your business success.
                  </p>
                </div>
              </section>

          <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
              <iframe src="https://paystack.shop/iplanbd" width="100%" height="600px" frameborder="0" scrolling="auto"></iframe>
          </section>
          <Footer />
      </div>
    </div>
  );
}
