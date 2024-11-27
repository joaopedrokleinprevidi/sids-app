import { ArrowRight } from "lucide-react";
import { Button } from "../ui/shadcn/button";

export function FreeConsultancy() {
  return (
    <div className="py-[50px] px-[40px] xs:px-[65px] sm:px-[135px] relative bg-[#92f3f9E6] flex xl:gap-x-[20px] font-dmSans text-pBlack">
      <div className="flex flex-col gap-y-[35px]">
        <h1 className="text-[36px] font-bold leading-[40px]">
          Que tal uma <br /> consultoria gratuita?
        </h1>
        <p className="text-[20px] leading-[32px]">
          Está em dúvida sobre qual solução contratar? Vamos bater um <br />{" "}
          papo e encontrar a melhor opção para o seu negócio. É gratuito!
        </p>
        <Button variant="branco" className="rounded-[16px] h-[40px] w-min">
          <span className="text-[18px] font-dmSans">Agendar</span>
          <ArrowRight
            style={{ width: "24px", height: "24px", color: "black" }}
          />
        </Button>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="free-consultancy-image.png"
        alt="Ilustração sobre consultoria gratuita"
        className="hidden xl:block absolute bottom-0 xl:right-8 2xl:right-32 3xl:right-48 w-min h-min max-w-[486px] max-h-[417px] z-50"
      />
    </div>
  );
}
