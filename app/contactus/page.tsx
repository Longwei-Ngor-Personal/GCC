import { MapPin, Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import ContactForm from "../components/ContactUs/Form";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="py-32 min-h-screen bg-gradient-to-b from-gray-50 to-[#F9FAFB]">
        <div className="container mx-auto py-16 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Let&apos;s <span className="text-[#D6B171]">Connect</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;d love to hear from you! Whether you have a question
                about our services, need a quote, or just want to say hello,
                we&apos;re here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#f5ebd7] rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-[#D6B171]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-3">
                  We&apos;re available Monday-Friday, 9am-5pm
                </p>
                <a
                  href="tel:+85253013176"
                  className="text-[#D6B171] font-medium hover:text-[#c09c5c] inline-flex items-center"
                >
                  +852 (530) 13 176
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#f5ebd7] rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#D6B171]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-3">
                  We&apos;ll respond as quickly as possible
                </p>
                <a
                  href="mailto:contact@company.com"
                  className="text-[#D6B171] font-medium hover:text-[#c09c5c] inline-flex items-center"
                >
                  contact@company.com
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#f5ebd7] rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#D6B171]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 mb-3">
                  Come say hello at our office
                </p>
                <p className="text-[#D6B171] font-medium">
                  Guangdong Investment Tower 21/Floor, 148 Connaught Rd Central
                  <br />
                  Sheung Wan, Hong Kong
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Map Section - 3 columns on large screens */}
              <div className="lg:col-span-3 h-[400px] lg:h-auto relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.759308180901!2d114.14857057564768!3d22.287105579696153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007da4ead947%3A0x23998896f1107fc9!2sGuangdong%20Investment%20Tower!5e0!3m2!1sen!2sus!4v1747981760958!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                  className="absolute inset-0"
                />
              </div>

              {/* Form Section - 2 columns on large screens */}
              <div className="lg:col-span-2 p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-[#D6B171] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                We&apos;re Here For You
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team is committed to providing exceptional
                service. We value your feedback and look forward to building a
                relationship with you.
              </p>

              {/* Social Media Links */}
              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center transition-colors hover:bg-[#f5ebd7]"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center transition-colors hover:bg-[#f5ebd7]"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center transition-colors hover:bg-[#f5ebd7]"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-40 right-10 w-64 h-64 bg-[#D6B171] opacity-5 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute bottom-40 left-10 w-72 h-72 bg-[#D6B171] opacity-5 rounded-full -z-10 blur-3xl"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
