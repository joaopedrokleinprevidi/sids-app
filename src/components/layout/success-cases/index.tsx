import { Button } from "@/components/ui/shadcn/button";
import { SuccessCasesCarousel } from "./success-cases-carousel";
import { ArrowRight } from "lucide-react";

export function SuccessCases() {
  return (
    <div className="w-full bg-[#FAFAFA] flex flex-col items-center justify-center gap-y-4">
      <span className="flex items-center justify-center flex-col gap-4 mt-14">
        <h1 className="font-dmSans font-bold text-[44px] text-center max-w-[300px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[850px] w-max">
          Nossas soluções em ação
        </h1>
        <h2 className="font-dmSans font-normal text-[24px] text-center max-w-[300px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[850px] w-max">
          De consultoria em dados a projetos avançados, nossos cases de sucesso
          mostram como nossa expertise traz resultados concretos e mudanças
          reais para nossos clientes.
        </h2>
      </span>

      <div className="relative -right-[6px]">
        <SuccessCasesCarousel />
      </div>

      <Button
        variant="preto"
        className="mt-[5px] rounded-[16px] sm:mt-[15px] md:mt-[25px] h-[52px] mb-14"
      >
        <span className="text-[16px] sm:text-[20px]">Agendar um bate-papo</span>
        <ArrowRight style={{ width: "24px", height: "24px", color: "black" }} />
      </Button>
    </div>
  );
}
