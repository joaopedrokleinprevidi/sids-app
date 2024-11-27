import { Lock, Unlock } from "lucide-react";

const methodsOfServices = [
  {
    title: "Escopo Fechado",
    description:
      "Perfeito para empresas que já sabem o que querem e buscam aperfeiçoamento. O Escopo Fechado é um projeto desenvolvido em tempo determinado e valor fixo. Rigidez e objetividade são as marcas deste modelo.",
    icon: Lock,
  },
  {
    title: "Escopo Livre",
    description:
      "Ideal para empresas que enfrentam desafios e buscam soluções. O Escopo Livre oferece entregas recorrentes e melhoria contínua, com uma abordagem estratégica que mantém sua empresa sempre à frente no mercado. Flexibilidade e inovação constante definem esse modelo.",
    icon: Unlock,
  },
];

export function HowWeWorkAtSIDS() {
  return (
    <div className="bg-pBlack text-white p-2">
      <span className="flex items-center justify-center flex-col gap-4 mt-10">
        <h1 className="font-dmSans font-bold text-[44px] text-center max-w-[300px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[850px] w-max">
          Como trabalhamos na SIDs
        </h1>
        <h2 className="font-dmSans font-normal text-[24px] text-center  max-w-[300px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[850px] w-max">
          Simplificamos a complexidade do seu projeto em dois modelos de
          contratação: Escopo Fechado e Escopo Livre. Escolha o que melhor
          atender às suas necessidades.
        </h2>
      </span>
      <div className="grid grid-cols-mobile md:grid-cols-desktop gap-y-[50px] gap-x-[50px] xl:gap-y-[65px] xl:gap-x-[150px] p-6 my-8 justify-center items-center">
        {methodsOfServices.map((method) => (
          <div
            key={`${method.title}-${method.description}`}
            className="p-2 flex flex-col gap-y-[30px]"
          >
            <span className="w-[46px] h-[46px] flex items-center justify-center bg-pIconAzulClaro text-black rounded-[10px]">
              <method.icon className="w-7 h-7" />
            </span>

            <h1 className="font-dmSans font-semibold text-[24px]">
              {method.title}
            </h1>

            <p className="font-dmSans text-[18px] font-normal leading-[30px]">
              {method.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
