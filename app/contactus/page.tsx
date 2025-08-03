"use client";

import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import ContactForm from "../components/ContactUs/Form";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="py-32 min-h-screen bg-gradient-to-b from-gray-50 to-[#F9FAFB]">
        <div className="w-full bg-[#212C57] mb-12 px-12 pb-12">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/home/logobig.png"
              alt="logo"
              width={500}
              height={500}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Cambodia */}
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/home/khmerflag.png"
                  alt="flag"
                  width={80}
                  height={80}
                  className="bg-white rounded-full"
                />
                <p className="text-white font-bold text-lg tracking-wider">
                  {t("contactus.locations.cambodia.name")}
                </p>
              </div>
              <p className="text-white text-sm mt-4">
                {t("contactus.locations.cambodia.address")}
              </p>
              <p className="text-white text-sm mt-2">gcc-gp.com</p>
            </div>

            {/* China */}
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/home/chinaflag.png"
                  alt="flag"
                  width={80}
                  height={80}
                  className="bg-white rounded-full"
                />
                <p className="text-white font-bold text-lg tracking-wider">
                  {t("contactus.locations.china.name")}
                </p>
              </div>
              <p className="text-white text-sm mt-4">
                {t("contactus.locations.china.address")}
              </p>
              <p className="text-white text-sm mt-2">gcc-gp.com</p>
            </div>

            {/* Japan */}
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/home/japanflag.png"
                  alt="flag"
                  width={80}
                  height={80}
                />
                <p className="text-white font-bold text-lg tracking-wider">
                  {t("contactus.locations.japan.name")}
                </p>
              </div>
              <p className="text-white text-sm mt-4">
                {t("contactus.locations.japan.address")}
              </p>
              <p className="text-white text-sm mt-2">gcc-gp.com</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12 md:mt-16 md:ml-20">
            {/* Orussey */}
            <div className="flex flex-col md:items-center md:justify-center w-full md:w-2/3">
              <div className="flex items-center gap-4">
                <Image
                  src="/nadi/orussey-logo.png"
                  alt="flag"
                  width={80}
                  height={80}
                  className="bg-white w-20 h-20 rounded-full object-contain"
                />
                <p className="text-white font-bold text-lg tracking-wider">
                  {t("contactus.locations.orussey.name")}
                </p>
              </div>
              <p className="text-white text-sm mt-4">
                {t("contactus.locations.orussey.address")}
              </p>
            </div>

            {/* Borey Nadi */}
            <div className="flex flex-col md:items-center justify-center w-full md:w-2/3 mt-12 md:mt-0">
              <div className="flex items-center gap-4">
                <Image
                  src="/nadi/logo-name.png"
                  alt="flag"
                  width={80}
                  height={80}
                  className="bg-white w-20 h-20 p-2 rounded-full"
                />
                <p className="text-white font-bold text-lg tracking-wider">
                  {t("contactus.locations.nadi.name")}
                </p>
              </div>
              <p className="text-white text-sm mt-4">
                {t("contactus.locations.nadi.address")}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-16 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {t("contactus.connect.title")}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("contactus.connect.subtitle")}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Phone */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#f5ebd7] rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-[#D6B171]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("contactus.cards.call.title")}
                </h3>
                <p className="text-gray-600 mb-3">
                  {t("contactus.cards.call.description")}
                </p>
                <a
                  href="tel:+85253013176"
                  className="text-[#D6B171] font-medium hover:text-[#c09c5c] inline-flex items-center"
                >
                  +852 (530) 13 176
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#f5ebd7] rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#D6B171]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("contactus.cards.email.title")}
                </h3>
                <p className="text-gray-600 mb-3">
                  {t("contactus.cards.email.description")}
                </p>
                <a
                  href="mailto:contact@company.com"
                  className="text-[#D6B171] font-medium hover:text-[#c09c5c] inline-flex items-center"
                >
                  contact@company.com
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#f5ebd7] rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#D6B171]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("contactus.cards.visit.title")}
                </h3>
                <p className="text-gray-600 mb-3">
                  {t("contactus.cards.visit.description")}
                </p>
                <p className="text-[#D6B171] font-medium">
                  Guangdong Investment Tower 21/Floor, 148 Connaught Rd Central
                  <br />
                  Sheung Wan, Hong Kong
                </p>
              </div>
            </div>

            {/* Map + Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
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
              <div className="lg:col-span-2 p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-[#D6B171] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t("contactus.cards.message.title")}
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("contactus.final.title")}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("contactus.final.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
