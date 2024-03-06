import { component$ } from "@builder.io/qwik";
import { Clients } from "~/components/clients/Clients";
import { HeroSection } from "~/components/heroSection/HeroSection";
import { WhyChooseUs } from "~/components/whyChooseUs/WhyChooseUs";

export default component$(() => {
  return (
    <>
      <div>
        <HeroSection />
        <Clients />
        <WhyChooseUs />
      </div>
    </>
  );
});
