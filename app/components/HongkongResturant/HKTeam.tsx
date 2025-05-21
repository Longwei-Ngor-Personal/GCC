import Image from "next/image";

function HKTeam() {
  return (
    <section id="team" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl col-span-1 font-bold text-gray-900 mb-6 leading-tight">
            Person in Charge
          </h2>
          <p className="max-w-3xl mx-auto md:text-lg text-gray-700 leading-relaxed">
            Theresa is the founder of “Hong Kong Restaurant,” founded the first
            “Hong Kong Restaurant” in 2016. It is amazed by foreigners and local
            people, successfully entered the catering industry in Cambodia.
            “Hong Kong Restaurant” was founded in 2016. It is under GC Catering
            enterprise; it is the only main brand with Hong Kong passion and
            Hong Kong style product. in the past 4 years, it opened 5 branches
            in Phnom Penh and one flagship store in Malaysia. It already became
            one of the most outstanding food chain restaurants in Cambodia, also
            is a Chinese restaurant with most branches opened.
          </p>
        </div>
        <Image
          src="/media/camera.avif"
          alt="SOHO MALL Interior"
          width={1920}
          height={1080}
          className="w-12 h-12 rounded-full object-cover mx-auto mt-10"
        />
        <p className="text-gray-900 font-semibold text-center mt-2">
          {" "}
          Theresa Yuen
        </p>
      </div>
    </section>
  );
}

export default HKTeam;
