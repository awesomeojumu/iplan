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
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-blue-900" /> iPlan Solution Masterclass
              </span>
              <h4 className=" capitalize text-2xl md:text-3xl xl:text-3xl font-bold my-3">
                 iPlan Virtual Masterclass: Unlock the Secrets to a Standout Resume
              </h4>
              <p>Are you ready to elevate your career with a resume that grabs attention? Join our exclusive iPlan Virtual Masterclass and learn the insider tips and tricks to create a resume that stands out to recruiters and hiring managers. Whether you're a job seeker, a seasoned professional looking to advance, or a recent graduate entering the workforce, this masterclass will equip you with the skills to build a powerful resume that opens doors to new opportunities.</p>
            </div>
            </section>

            <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-10 gap-10">
              <iframe src="https://paystack.com/buy/planexicvmaster" width="100%" height="700px" frameborder="0" scrolling="auto"></iframe>
            </section>

            <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-10 gap-10">
                <div className="flex flex-col gap-1 flex-1">

                <h4 className="capitalize text-2xl md:text-2xl xl:text-2xl font-bold my-3">
                <span className="text-blue-900"><strong>My Backstory:</strong></span> How did we get here?
                  </h4>
                  <p>
                  In 2018, I was job hunting and needed to create my first CV, because I was a student who needed data, so I thought, <span className="text-blue-900"> <strong>"Why not get a job?"</strong></span> I went to a cyber café and spent hours working on my CV, crafting it from scratch. While I was focused on the design, someone noticed my work and asked if I could create one for them. I quoted 3,000 Naira, but they never showed up to collect the CV. Despite that, I got the idea,  <span className="text-red-900"> <strong>why not write CV and get paid?</strong></span> why not offer CV writing as a service?
                  </p>

                  <p>
                  I reached out to a friend to help me create a flyer, and I started offering my services for <span className="text-blue-900"> <strong>2,000 Naira</strong></span>. This was in 2018, and by the end of that year, I had already learned a lot about tailoring CVs. Over time, as I gained more experience, my pricing increased. By the end of 2019, I was charging <span className="text-red-900"> <strong>3,500 Naira</strong></span>. By the end of 2020, it was <span className="text-blue-900"> <strong>5,000 Naira</strong></span>, and by the end of 2021, it was <span className="text-blue-900"> <strong>10,000 Naira</strong></span>. Took some HR Consulting Courses, and continued to improve, and then my rates kept growing.
                  </p>

                  <p>
                    By the end of 2022, my pricing had reached <span className="text-red-900"> <strong>20,000 Naira</strong></span>. In 2023, I was charging <span className="text-blue-900"> <strong>30,000 Naira for Nigerian clients</strong></span> and <span className="text-red-900"> <strong>40,000 Naira for international clients.</strong></span>. I received the highest amount of positive feedback and recommendations at this time, which confirmed that my work had made a real impact on others.
                  </p>

                  <p>
                    Now, in 2025, after years of refining my skills I’m excited to share my knowledge with others in my resume masterclass. I want to teach people how to stand out with their CVs and unlock their career potential.
                  </p>

                  <p>
                    I will be sharing the tips, the tools, the hacks, dos and don’ts, exploring with AI tools, using Chatgpt, understand the prompts engineering, testing and growths.
                  </p>
                  
                  <h4 className="capitalize text-2xl md:text-2xl xl:text-2xl font-bold my-3">
                    What You’ll Learn: 
                  </h4>
                  <ol>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Crafting an ATS-Friendly Resume::</strong> Understand how Applicant Tracking Systems (ATS) work and how to optimize your resume for maximum visibility.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Tailoring Your Resume:</strong>  Learn how to customize your resume for different roles and industries to highlight your strengths.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Formatting and Design Tips:</strong> Discover the most effective ways to present your skills, experience, and achievements to stand out in a crowded job market.</li>
                    <li><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-900" /><strong>Personal Branding:</strong> Understand how to showcase your unique value proposition and personal brand in your resume.</li>
                  </ol>

                  <h4 className="capitalize text-2xl md:text-2xl xl:text-2xl font-bold my-3">
                    Why Join Our Masterclass?
                  </h4>
                  <ol>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Expert Guidance:</strong> Gain insights from experienced resume writers who know exactly what recruiters are looking for.</li>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Practical Tools: </strong> Leave with actionable tips and templates you can apply to your resume immediately.</li>
                    <li><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 text-green-500" /><strong>Interactive Learning:</strong> Engage in a live, virtual session with plenty of opportunities to ask questions and get personalized feedback.</li>
                  </ol>

                  <h2 className="capitalize text-lg md:text-lg xl:text-lg font-bold my-3">
                    <FontAwesomeIcon icon={faUserTie} className="ml-2 text-blue-900" /> 
                    Get Registered 
                  </h2>
                  <p>Don’t miss this opportunity to learn from the best and take your resume—and career—to the next level. Sign up today and secure your spot in this transformative session!                  </p>
                  
                </div>
              </section>

          <Footer />
      </div>
    </div>
  );
}
