import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardList, faUsers, faUserTie, faStar, faArrowAltCircleRight, faFileAlt, faChartLine, faMoneyBillAlt, faSitemap, faExclamationTriangle, faBrain, faLightbulb, faSearch, faCog, faBriefcase, faUser, faHandshake, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeroSection from "../components/pageherosections";
import Image from "next/image";

export default function MasterclassPage() {
  return (
    <div>
      <Navbar />
          <div className="flex flex-col gap-10 md:gap-10">
          <PageHeroSection />
          <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-blue-900 uppercase block font-semibold tracking-widest">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-blue-900" /> iPlan Business Development
              </span>
              <h2 className=" capitalize text-2xl md:text-4xl xl:text-5xl font-bold my-3">
                 iPlan Virtual Masterclass: Unlock the Secrets to a Standout Resume
              </h2>
              <p>Are you ready to elevate your career with a resume that grabs attention? Join our exclusive iPlan Virtual Masterclass and learn the insider tips and tricks to create a resume that stands out to recruiters and hiring managers. Whether you're a job seeker, a seasoned professional looking to advance, or a recent graduate entering the workforce, this masterclass will equip you with the skills to build a powerful resume that opens doors to new opportunities.</p>
            </div>
            </section>

            <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-20 gap-20">
                <div className="flex flex-col gap-2 flex-1">
                    <iframe src="https://paystack.com/buy/ats-resume-masterclass-kfsjuy" width="100%" height="700px" frameborder="0" scrolling="auto"></iframe>
                  
                  <h2 className=" capitalize text-3xl md:text-3xl xl:text-4xl font-bold my-3">
                    
                    <FontAwesomeIcon icon={faHandshake} className="ml-2 text-blue-900 px-1" />
                    
                    Why Choose <span className="text-blue-900">iPlan Business?</span> 
                  </h2>
                  <p className="text-md">
                    iPlan Business Development is dedicated to empowering businesses with strategic planning and comprehensive advisory services. Our expert team provides tailored solutions designed to meet your unique needs and drive sustainable growth. Whether you're a startup seeking funding or an established business aiming for expansion, iPlan BD is here to help you achieve your goals.
                  </p>

                  <h2 className="capitalize text-2xl md:text-2xl xl:text-5xl font-bold my-3">
                  <FontAwesomeIcon icon={faClipboardList} className="ml-2 text-blue-900" /> 
                    What You’ll Learn: 
                  </h2>
                  <ol>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Crafting an ATS-Friendly Resume::</strong> Understand how Applicant Tracking Systems (ATS) work and how to optimize your resume for maximum visibility.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Tailoring Your Resume:</strong>  Learn how to customize your resume for different roles and industries to highlight your strengths.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Formatting and Design Tips:</strong> Discover the most effective ways to present your skills, experience, and achievements to stand out in a crowded job market.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Personal Branding:</strong> Understand how to showcase your unique value proposition and personal brand in your resume.</li>
                  </ol>

                  <h2 className="capitalize text-2xl md:text-2xl xl:text-5xl font-bold my-3">
                    Why Join Our Masterclass?
                  </h2>
                  <ol>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Expert Guidance:</strong> Gain insights from experienced resume writers who know exactly what recruiters are looking for.</li>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Practical Tools: </strong> Leave with actionable tips and templates you can apply to your resume immediately.</li>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Interactive Learning:</strong> Engage in a live, virtual session with plenty of opportunities to ask questions and get personalized feedback.</li>
                  </ol>

                  <h2 className="capitalize text-lg md:text-lg xl:text-lg font-bold my-3"><FontAwesomeIcon icon={faUserTie} className="ml-2 text-blue-900" /> Get Registered </h2>
                  <p>Don’t miss this opportunity to learn from the best and take your resume—and career—to the next level. Sign up today and secure your spot in this transformative session!                  </p>
                </div>
              </section>

          <Footer />
      </div>
    </div>
  );
}
