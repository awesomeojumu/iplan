import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFile, faFileAlt, faHandshake, faPlus, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeroSection from "../components/pageherosections";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div>
      <Navbar />
          <div className="flex flex-col gap-10 md:gap-10">
          <PageHeroSection />
          <section className="container mx-auto px-4 md:px-20 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-blue-900 uppercase block font-semibold tracking-widest">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-blue-900" />iPlan Resume/CV
              </span>
              <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
                  Welcome to iPlan Resume/CV
              </h2>
              <p className="text-md">
              At iPlan Resume/CV, we understand the importance of a standout resume in today's competitive job market. Our expert team specializes in crafting professional resumes that grab attention and land interviews. Whether you're a seasoned professional looking to advance your career or a recent graduate entering the workforce, we're here to help you showcase your skills and experience effectively.
              </p>
            </div>

            <div className="flex-1 relative w-full">
              <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
                <Image
                  src={"/resumepage.jpg"}
                  width={300}
                  height={300}
                  alt="core features"
                  className="object-cover w-full md:w-[90%] xl:w-4/5"
                />
              </div>
            </div>
          </section>

          <section className="container mx-auto px-7 md:px-20 flex flex-col lg:flex-row items-center lg:gap-20 gap-20">
            <div className="flex flex-col gap-2 flex-1">
              <h2 className="capitalize text-2xl md:text-3xl xl:text-4xl font-bold my-3">
                <FontAwesomeIcon icon={faHandshake} className="mr-2 text-blue-900" />
                Why Choose <span className="text-blue-900">iPlan Resume/CV?</span>
              </h2>
              <p className="text-md">
                iPlan Solutions combines expertise in resume writing and business planning to help individuals and businesses achieve their goals. Whether you’re a job seeker needing a standout resume or a business looking for strategic guidance, we offer tailored solutions to meet your needs.
              </p>

              <ul>
                <li>
                  <strong><FontAwesomeIcon icon={faUser} className="mr-2 text-blue-900" />Expertise:</strong> Our experienced resume writers know what recruiters and hiring managers are looking for and will tailor your resume to highlight your strengths.
                </li>
                <li>
                  <strong><FontAwesomeIcon icon={faFile} className="mr-2 text-blue-900" />ATS-Friendly:</strong> We ensure that your resume is optimized to pass through Applicant Tracking Systems (ATS), increasing your chances of getting noticed by employers.
                </li>
                <li>
                  <strong><FontAwesomeIcon icon={faHandshake} className="mr-2 text-blue-900" />Personalized Service:</strong> We take the time to understand your career goals and unique strengths, crafting a resume that reflects your individuality and maximizes your potential.
                </li>
                <li>
                  <strong><FontAwesomeIcon icon={faPlus} className="mr-2 text-blue-900" />Additional Services:</strong> We also offer <span className="text-blue-900"><b>LinkedIn Optimization</b></span> and  <span className="text-blue-900"><b>Cover Letter Writing</b></span> services to enhance your job search.
                </li>
                <li>
                  <strong><FontAwesomeIcon icon={faClock} className="mr-2 text-blue-900" />Timely Delivery:</strong> We understand the urgency of job hunting, and we strive to deliver your resume promptly without compromising on quality.
                </li>
              </ul>

                <h2 className="capitalize text-2xl md:text-3xl xl:text-5xl font-bold my-3"> 
                  Our Process:
                </h2>
                <ol>
                  <li><strong>Consultation:</strong> We start with a free consultation to understand your career objectives and gather relevant information.</li>
                  <li><strong>Resume Creation:</strong> Our team will craft a customized resume that highlights your skills, experiences, and achievements.</li>
                  <li><strong>Revision:</strong> We offer revisions to ensure your complete satisfaction with the final product.</li>
                  <li><strong>Delivery:</strong> Your professionally crafted resume will be delivered to you in a format that is ready to impress employers.</li>
                </ol>

                <h2 className="capitalize text-lg md:text-lg xl:text-lg font-bold my-3">Get Started Today!</h2>
                <p>Ready to take the next step in your career journey? Contact us now to schedule your free consultation and let us help you create a resume that opens doors to new opportunities.</p>
              </div>
            </section>

          <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
              <iframe src="https://paystack.shop/iplancv" width="100%" height="600px" frameborder="0" scrolling="auto"></iframe>
          </section>
          <Footer />
      </div>
    </div>
  );
}
