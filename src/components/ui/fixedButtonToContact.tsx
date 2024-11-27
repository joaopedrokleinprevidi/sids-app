import { Button } from "./shadcn/button";

export function FixedButtonToContact() {
  return (
    <>
      <Button
        aria-label="Fale conosco por whatsapp"
        variant="azulClaro"
        className="fixed bottom-2 right-2 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-[48px] h-[48px] rounded-full shadow-lg text-green-800"
      >
        <i className="ri-whatsapp-line text-[30px]"></i>
      </Button>
    </>
  );
}
