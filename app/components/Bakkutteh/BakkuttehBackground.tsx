import Image from "next/image";

function BakkuttehBackground() {
  return (
    <section id="background" className="pt-14 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Origin of Bak Kut Teh{" "}
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              During the British rule, the British built a port in Klang. At
              that time, most of the ancestors who went to Southeast Asia to
              make a living worked as manual laborers in the port or as miners.
              Because the miners have been immersed in the mining lake for a
              long time, many miners have become ill from overwork and needed
              supplements, but they could not afford expensive Chinese herbal
              medicines. Later, a tin mine owner who had a basic understanding
              of Chinese medicine and a compassionate heart, was sympathetic to
              the suffering of the miners and hoped that they could have a
              healthy body to improve efficiency, so he wrote a Chinese herbal
              prescription and instructed the chef to boil a pot of soup with
              meat and bones for the employees to stay warm. After the story
              spread, people learned to use Bak Kut Teh to ward off cold and
              relieve fatigue, and the fragrant Bak Kut Teh can also be eaten as
              breakfast and lunch, which can quickly provide physical energy.
            </p>
          </div>
          <Image
            src="/bakkutteh/background.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain md:mt-20 order-1"
          />
        </div>
      </div>
    </section>
  );
}

export default BakkuttehBackground;
