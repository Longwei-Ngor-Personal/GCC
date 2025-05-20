import Image from "next/image";

function MediaLEDBoard() {
  return (
    <section id="led" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            LED Board/LED Screen
          </h2>
          <p className="max-w-2xl mx-auto md:text-lg text-gray-700 leading-relaxed mb-12">
            Opposite Phnom Penh International Airport, 8.64m(W)* 4.80m(H)
            LEDBoard  The area with the highest traffic and people flow in Phnom
            Penh has the biggest advantage of being able to effectively reach
            foreign tourists and merchants. The first thing you see when you
            arrive in Cambodia is your business and products.
          </p>
        </div>
        <div className="lg:grid grid-cols-2 gap-4 items-start">
          <div className="col-span-1 space-y-4 hidden lg:block">
            <Image
              src="/soho/sh1.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-full aspect-square"
            />
          </div>
          <div className="col-span-1 space-y-4 mt-4 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/soho/sh1.png"
                alt="SOHO MALL Interior"
                width={1920}
                height={1080}
                className="w-full h-auto aspect-square"
              />
              <Image
                src="/soho/sh1.png"
                alt="SOHO MALL Interior"
                width={1920}
                height={1080}
                className="w-full h-full aspect-square"
              />
            </div>
            <Image
              src="/soho/sh1.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  ); 
}

export default MediaLEDBoard;
