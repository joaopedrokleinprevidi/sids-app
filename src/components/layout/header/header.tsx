import { LogoHeader } from "./logo-header";
import { Button } from "../../ui/shadcn/button";
import { ArrowRight } from "lucide-react";
import { HeaderNavbar } from "./header-navbar";

export function Header() {
  return (
    <header className="h-[65px] px-[15px] md:h-[80px] w-full bg-pAzulProfundo md:px-[50px] flex items-center justify-between">
      <LogoHeader />

      {/* Encapsulamento para telas menores */}
      <div className="flex items-center gap-4 md:hidden">
        <HeaderNavbar />
        <Button variant="azulClaro" className="font-poppins">
          <span className="text-black">Fale conosco</span>
          <ArrowRight className="w-4 h-4 text-pBlack" />
        </Button>
      </div>

      {/* Navbar para telas maiores */}
      <div className="hidden md:block">
        <HeaderNavbar />
      </div>

      {/* Botão para telas maiores */}
      <div className="hidden md:block">
        <Button variant="azulClaro" className="font-poppins">
          <span className="text-black">Fale conosco</span>
          <ArrowRight className="w-4 h-4 text-pBlack" />
        </Button>
      </div>
    </header>
  );
}
