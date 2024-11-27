import { ArrowRight } from "lucide-react";
import { Button } from "../ui/shadcn/button";

export function Hero() {
  return (
    <div
      className="relative w-full h-[500px] xs:h-[520px] sm:h-[650px]  md:h-[800px]"
      id="hero"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Ilustrate image background"
        src="background-hero-image-optimized.avif"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
        <span className="font-dmSans">
          <h1 className="mt-14 text-[32px] leading-8 xs:text-[40px] sm:mt-15 sm:text-[50px] sm:leading-[50px] md:text-[68px] md:leading-[62px] md:mt-0 font-light italic mb-4 flex flex-col items-center gap-y-2">
            <span>
              Aumente seus <span className="font-medium italic">lucros</span>,
            </span>
            <span>
              diminua seus <span className="font-medium italic">custos</span>.
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-[400px] italic mb-4 text-center mt-[45px] sm:mt-[55px] md:mt-[65px]">
            A 8 anos evoluindo a realidade de empresas e transformando vidas.
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-[400px]  italic text-center mt-[40px]">
            Agende agora mesmo uma{" "}
            <span className="font-medium italic">consultoria gratuita</span>, e
            descubra como a <span className="font-medium italic">SIDs</span>{" "}
            pode transformar a sua empresa.
          </h3>
        </span>
        <Button
          aria-label="Agendar consultoria gratuita"
          variant="azulEscuro"
          className="mt-[40px] md:mt-[55px] h-[45px]"
        >
          <span className=" text-[16px] sm:text-[20px]">
            Agendar consultoria gratuita
          </span>
          <ArrowRight
            style={{ width: "24px", height: "24px", color: "white" }}
          />
        </Button>
      </div>
    </div>
  );
}
