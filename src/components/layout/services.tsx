import {
  ArrowRight,
  BarChart,
  Cloudy,
  RefreshCw,
  Rocket,
  UserCheck,
} from "lucide-react";
import { Button } from "../ui/shadcn/button";

const allServices = [
  {
    icon: UserCheck,
    title: "Consultoria em TI",
    description:
      "Precisa de um desenvolvimento high-code? Criamos sistemas escaláveis utilizando as melhores tecnologias de ponta.",
  },
  {
    icon: BarChart,
    title: "Análise de dados",
    description:
      "Precisa de um desenvolvimento high-code? Criamos sistemas escaláveis utilizando as melhores tecnologias de ponta.",
  },
  {
    icon: Cloudy,
    title: "Soluções em Cloud Computing",
    description:
      "Precisa de um desenvolvimento high-code? Criamos sistemas escaláveis utilizando as melhores tecnologias de ponta.",
  },
  {
    icon: RefreshCw,
    title: "Sincronização de Dados",
    description:
      "Precisa de um desenvolvimento high-code? Criamos sistemas escaláveis utilizando as melhores tecnologias de ponta.",
  },
];

export function Services() {
  return (
    <div className="bg-pBlack text-white p-2" id="services">
      <span className="flex items-center justify-center flex-col gap-4 mt-10">
        <h1 className="font-dmSans font-bold text-[44px]">Serviços</h1>
        <h2 className="font-dmSans font-normal text-[24px] text-center">
          Descubra as áreas onde somos especialistas.
        </h2>
      </span>
      <div className="grid grid-cols-mobile md:grid-cols-desktop gap-y-[50px] gap-x-[50px] xl:gap-y-[65px] xl:gap-x-[150px] p-6 my-8 justify-center items-center ">
        {allServices.map((service) => (
          <div
            key={`${service.title}-${service.description}`}
            className="p-2 flex flex-col gap-y-[30px]"
          >
            <span className="w-[46px] h-[46px] flex items-center justify-center bg-pIconAzulClaro text-black rounded-[10px]">
              <service.icon className="w-7 h-7" />
            </span>

            <h1 className="font-dmSans font-semibold text-[24px]">
              {service.title}
            </h1>

            <p className="font-dmSans text-[18px] font-normal leading-[30px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-[50px] gap-[20px] text-white">
        <p className="font-spaceGrotesk font-normal text-[24px] text-center">
          Vamos conversar sobre o{" "}
          <span className="font-dmSans font-bold italic">futuro</span> do seu
          negócio?
        </p>

        <Button variant="branco" className="rounded-[16px] h-[40px] w-min mb-6">
          <span className="hidden sm:inline-block font-dmSans text-[20px]">
            Agendar uma consultoria{" "}
            <span className="font-semibold">gratuita</span> agora!
          </span>
          <span className="inline-block sm:hidden font-dmSans text-[16px]">
            Consultoria <span className="font-semibold">gratuita</span>!
          </span>

          <Rocket className="hidden sm:inline-block w-[32px] h-[32px] text-[#3F50EB]" />
          <ArrowRight className="inline-block  sm:hidden w-[32px] h-[32px] text-[#3F50EB]" />
        </Button>
      </div>
    </div>
  );
}
