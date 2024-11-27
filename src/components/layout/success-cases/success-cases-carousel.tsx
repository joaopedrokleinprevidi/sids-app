import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/custom-carousel";
import { successCasesOptions } from "./success-cases-options";

export function SuccessCasesCarousel() {
  return (
    <>
      <Carousel className="w-min h-full box-border flex items-center justify-center">
        <CarouselContent className="w-min rounded-[20px] h-[640px] xs:h-[500px] sm:h-[448px] md:h-[580px] lg:h-[550px] max-w-[332px] xs:max-w-[402px] sm:max-w-[512px] md:max-w-[622px] lg:max-w-[912px] xl:max-w-[1032px]">
          {successCasesOptions.map((option) => (
            <CarouselItem
              key={option.title}
              className="flex items-center justify-center p-0 m-0 w-full h-full"
            >
              <div className="flex items-center justify-center flex-col bg-pBlack px-4 sm:px-6 md:px-8 h-full max-w-[290px] xs:max-w-[370px] sm:max-w-[480px] md:max-w-[590px] lg:max-w-[880px] xl:max-w-[1000px] w-full rounded-[20px] font-dmSans overflow-hidden">
                <span className="flex items-center justify-center gap-4 text-white md:min-w-[250px] h-max xl:min-w-[500px] mt-[20px] mb-[20px] md:mb-[35px]">
                  <span className="text-[24px] md:text-[30px] font-semibold font-spaceGrotesk">
                    {option.position}{" "}
                  </span>
                  <span className="text-[24px] md:text-[30px] font-spaceGrotesk">
                    {option.title}
                  </span>
                </span>
                <div className="flex items-center justify-center gap-x-[40px] mb-[20px] overflow-y-auto">
                  <option.image className="hidden lg:block w-full h-full" />
                  <div className="flex flex-col gap-y-[35px] md:gap-y-[40px] text-white max-w-[490px]">
                    <span>
                      <span className="font-dmSans italic font-bold text-[20px] md:text-[24px]">
                        Desafio:{" "}
                      </span>
                      <span className="font-dmSans font-light text-[18px] md:text-[22px] leading-[26px] md:leading-[32px]">
                        {option.stepByStep.challenge}
                      </span>
                    </span>
                    <span>
                      <span className="font-dmSans italic font-bold text-[20px] md:text-[24px]">
                        Solução:{" "}
                      </span>
                      <span className="font-dmSans font-light text-[18px] md:text-[22px] leading-[26px] md:leading-[32px]">
                        {option.stepByStep.solution}
                      </span>
                    </span>
                    <span>
                      <span className="font-dmSans italic font-bold text-[20px] md:text-[24px]">
                        Impacto:{" "}
                      </span>
                      <span className="font-dmSans font-light text-[18px] md:text-[22px] leading-[26px] md:leading-[32px]">
                        {option.stepByStep.impact}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
