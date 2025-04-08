import { Facebook, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

function SohoLocation() {
  return (
    <>
      <section id="location" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 bg-gray-200">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.006494731008!2d104.92969488336598!3d11.55139145937929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951729c61fe4b%3A0xf34d5d93cfed2df1!2zU09ITyBNYWxsIOiYh-ixquWVhuWfjg!5e0!3m2!1sen!2sus!4v1744073815209!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Visit SOHO MALL</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-black mr-3">
                        <MapPin size={20} />
                      </span>
                      Address
                    </h4>
                    <p className="text-gray-700 ml-11">
                      Soho mall, National Assembly street, Sangkat Tonle Bassac,
                      Khan Chamkarmon, Phnom Penh
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-black mr-3">
                        <Facebook size={20} />
                      </span>
                      Social Media
                    </h4>
                    <p className="text-gray-700 ml-11">
                      FACEBOOK: SOHO Night Market
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://www.facebook.com/sohomallphnompenh"
                      target="_blank"
                      className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-primary to-pink-700 hover:from-primary/70 hover:to-pink-500 transition-colors"
                    >
                      <Facebook size={18} className="mr-2" />
                      Visit Our Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the SOHO Lifestyle
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us at SOHO MALL for a unique blend of shopping, dining, and
            entertainment in the heart of Phnom Penh.
          </p>
          <Link
            href="#location"
            className="inline-flex items-center px-8 py-4 rounded-full text-gray-900 font-medium bg-white hover:bg-gray-100 transition-colors"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}

export default SohoLocation;
