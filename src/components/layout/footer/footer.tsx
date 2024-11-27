import { Facebook, Linkedin } from "lucide-react";
import { LogoFooter } from "./logo-footer";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="grid grid-cols-mobile md:grid-cols-desktop justify-between items-center px-[20px] xs:px-[40px] sm:px-[60px] md:px-[80px] py-[30px] bg-pBlack">
      <div className="w-full flex flex-col gap-y-[20px] max-w-[320px] sm:max-w-[450px]">
        <LogoFooter />
        <div className="flex gap-x-[10px]">
          <InstagramLogoIcon
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "transparent",
              color: "white",
            }}
          />
          <Facebook
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "transparent",
              color: "white",
            }}
          />
          <Linkedin
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "transparent",
              color: "white",
            }}
          />
          <i className="ri-whatsapp-line text-[20px] text-white bg-transparent"></i>
        </div>
        <p className="font-spaceGrotesk font-medium text-[14px] text-white">
          © Copyright 2024 SIDS. Todos os direitos reservados.
        </p>
      </div>
      <div className="w-full py-8 md:py-0 md:text-end flex flex-col gap-y-[10px] font-spaceGrotesk font-medium text-[14px] text-white max-w-[320px] sm:max-w-[450px]">
        <p>Av. Exemplo, 999 - Sala 02 - Centro, Cidade - SP, 89120-000</p>
        <p>(12) 99999-9999</p>
        <p>empresa@sits.com</p>
      </div>
    </footer>
  );
}
