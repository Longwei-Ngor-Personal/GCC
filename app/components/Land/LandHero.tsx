import Header from "../Header";
import Image from "next/image";

function LandHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/home/gcland.webp"
          width={1920}
          height={1080}
          alt="GC CITY NADI Landscape"
          className="w-full h-full object-cover"
        />
        <Image
          src="/home/landlogo.png"
          width={500}
          height={500}
          alt="gc-logo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="absolute inset-0 w-full h-full text-primary">
        <Header />
      </div>
    </section>
  );
}

export default LandHero;
