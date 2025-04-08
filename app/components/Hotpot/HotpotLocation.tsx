import React from "react";

function HotpotLocation() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us</h2>
            <p className="text-xl mb-8">
              Come experience the unique taste of Hong Kong style hot pot at LUK
              HOTPOT.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>
                No.20, St.217, Sangkat Viel Vong, Khan7, Makara, Phnom Penh
                (Olympic)
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p>FACEBOOK: Luk Hot Pot</p>
            </div>
          </div>

          <div className="h-96 relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.883559939971!2d104.90748467564325!3d11.560204288640291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f5f556b8e9%3A0x26d8afa252bbb2f5!2sLuk%20Hot%20Pot!5e0!3m2!1sen!2sus!4v1744076607278!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotpotLocation;
