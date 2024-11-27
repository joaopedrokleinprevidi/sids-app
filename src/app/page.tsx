import { Footer } from "@/components/layout/footer/footer";
import { FreeConsultancy } from "@/components/layout/free-consultancy";
import { Header } from "@/components/layout/header/header";
import { Hero } from "@/components/layout/hero";
import { HowWeWorkAtSIDS } from "@/components/layout/how-we-work-at-SIDS";
import { Services } from "@/components/layout/services";
import { SuccessCases } from "@/components/layout/success-cases";
import { FixedButtonToContact } from "@/components/ui/fixedButtonToContact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <SuccessCases />
        <HowWeWorkAtSIDS />
        <FreeConsultancy />
        <FixedButtonToContact />
      </main>

      <Footer />
    </>
  );
}
