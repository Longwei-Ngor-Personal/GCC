import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SocialResponsibilityPage() {
  return (
    <>
      <Header />
      <section className="py-44">
        <div className="container mx-auto px-4">
          <div className="lg:grid grid-cols-2 gap-12 items-center">
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Corporate Social Responsibility
              </h2>
              <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
                gcc pays efforts to execute the corporate social responsibility.
                we understand that corporate is not just a profit-making tool,
                we should also be a responsible citizen. we contribute to local
                disadvantaged community, at the same time we care about our
                employees, clients, partners and public. we play a positive role
                for the sustainable development of the society.
              </p>
              <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
                The sustainable development of the society and environment is
                very important to us. In this rapid growing economic
                environment, this kind of responsibility is a fundamental
                commercial indicator. As a good corporative citizen, we try our
                best to push these activities, giving feedback to the society.
                We contribute to the society and welfare, at the same time, we
                believe it also brings us good sustainable development.{" "}
              </p>
            </div>
            <Image
              src="/social.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain  order-1"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SocialResponsibilityPage;
