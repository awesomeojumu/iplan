import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import PageHeroSection from "../components/pageherosections";


// Privacy Policy text
const privacyPolicy = `
Privacy Policy

Last updated: June 3, 2024

iPlan Solution ("us", "we", or "our") operates the iPlan CV website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.

Information Collection and Use

While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, phone number, and postal address ("Personal Information").

Log Data

Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics. 

In addition, we may use third-party services such as Google Analytics that collect, monitor, and analyze this data.

Communications

We may use your Personal Information to contact you with newsletters, marketing or promotional materials, and other information that pertains to our services. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.

Cookies

Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.

Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.

Security

The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

Changes to This Privacy Policy

This Privacy Policy is effective as of the date stated at the top of this page and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.

Contact Us

If you have any questions about this Privacy Policy, please contact us at iplancv@gmail.com.
`;

export default function PrivacyPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-2 md:gap-2">
        <PageHeroSection />
        <section className="container md:px-20 ">
            <div class="container mx-auto py-8">
                <h1 class="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p class="mb-4">Last updated: June 3, 2024</p>
                <p class="mb-4">This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
                <h2 class="text-xl font-bold mb-2">Information Collection and Use</h2>
                <p class="mb-4">While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, phone number, and postal address ("Personal Information").</p>
                <h2 class="text-xl font-bold mb-2">Log Data</h2>
                <p class="mb-4">Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics. </p>
                <p class="mb-4">In addition, we may use third-party services such as Google Analytics that collect, monitor, and analyze this data.</p>
                <h2 class="text-xl font-bold mb-2">Communications</h2>
                <p class="mb-4">We may use your Personal Information to contact you with newsletters, marketing or promotional materials, and other information that pertains to our services. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
                <h2 class="text-xl font-bold mb-2">Cookies</h2>
                <p class="mb-4">Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.</p>
                <p class="mb-4">Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
                <h2 class="text-xl font-bold mb-2">Security</h2>
                <p class="mb-4">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                <h2 class="text-xl font-bold mb-2">Changes to This Privacy Policy</h2>
                <p class="mb-4">This Privacy Policy is effective as of the date stated at the top of this page and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
                <p class="mb-4">We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
                <p class="mb-4">If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.</p>
                <h2 class="text-xl font-bold mb-2">Contact Us</h2>
                <p class="mb-4">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:iplancv@gmail.com" class="text-blue-700 underline">iplancv@gmail.com</a>.</p>
            </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
