// ContactsPage.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faUser, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactsPage() {
  return (
    <div>
      <Navbar />
      <div className="h-16"></div>
      <div className="flex flex-col gap-16 md:gap-32">
        <section class="bg-gray-100 text-gray-900">
          <div class="container mx-auto py-12 px-6">
            <h1 class="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-center capitalize">Contact Us</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Our Address</h2>
                <p class="mb-4 flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-900" />
                  Federal Housing Authority, Lugbe, Abuja, Nigeria
                </p>
                <h2 class="text-2xl font-semibold mb-4">Email Us</h2>
                <p class="mb-4 flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-900" />
                  <a href="mailto:iplancv@gmail.com" class="hover:underline text-decoration-none">iplancv@gmail.com</a>
                </p>
                <h2 class="text-2xl font-semibold mb-4">Call Us</h2>
                <p class="mb-4 flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-900" />
                  <a href="tel:+234 708 634 1817" class="hover:underline text-decoration-none">+234 708 634 1817</a>
                </p>

              </div>
              {/* <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Send Us a Message</h2>
                <form action="#" method="POST">
                  <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <input type="text" id="name" name="name" class="block w-full pr-10 border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" placeholder="Your Name" required />
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <input type="email" id="email" name="email" class="block w-full pr-10 border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" placeholder="Your Email" required />
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <textarea id="message" name="message" rows="4" class="block w-full pr-10 border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" placeholder="Your Message" required></textarea>
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faComment} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
