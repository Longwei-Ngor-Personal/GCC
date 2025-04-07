import Link from "next/link";
import Header from "../Header";
import Image from "next/image";

export default function JapanHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/japan/tokyo.jpg"
          width={1920}
          height={1080}
          alt="GC CITY NADI Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="absolute inset-0 w-full h-full text-primary">
        <Header />
      </div>
      <div className="relative -z-10 container mx-auto px-4 text-center text-primary">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          JAPAN: GCC-Japan Headquarter
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Your trusted partner for Cambodian real estate investment in Japan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="#"
            className="inline-flex h-12 w-64 items-center justify-center text-gray-50 rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Visit Our Official Website
          </Link>
        </div>
      </div>
    </section>
  );
}
