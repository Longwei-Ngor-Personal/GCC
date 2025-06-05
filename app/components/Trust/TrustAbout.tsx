import Image from "next/image";

function TrustAbout() {
  return (
    <section id="about" className="py-24 px-4 ">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* <h2 className="max-w-2xl mx-auto text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"> */}
        {/*   GC Fund: Cambodian Property and Financial Investment Management */}
        {/* </h2> */}
        <Image
          src="/home/trustlogo.png"
          alt="logo"
          width={350}
          height={200}
          className="mb-8"
        />
        <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
          Cambodia has opened up its investment policy in recent years, with a
          GDP growth of 7.1% in 2019 , the highest in Southeast Asia. This has
          attracted a large number of foreign investors and international
          investment banks to develop in Cambodia and conduct large and small
          mergers and acquisitions. As one of the very few companies with a
          trust license, GC Trust has seized the opportunity to become a bridge
          between Cambodia and many foreign investors, and is committed to
          allowing clients to invest with peace of mind under the supervision of
          government laws.
        </p>
      </div>
    </section>
  );
}

export default TrustAbout;
