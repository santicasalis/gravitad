import { component$ } from "@builder.io/qwik";
import { Clients } from "~/components/clients/Clients";
import { HeroSection } from "~/components/heroSection/HeroSection";
import { OurServices } from "~/components/ourServices/OurServices";
import { SeeHow } from "~/components/seeHow/SeeHow";
import { Testimonials } from "~/components/testimonials/Testimonials";
import { WhyChooseUs } from "~/components/whyChooseUs/WhyChooseUs";

export default component$(() => {
  return (
    <>
      <div>
        <HeroSection />
        <Clients />
        <WhyChooseUs />
        <Testimonials />
        <OurServices />
        <SeeHow />
      </div>
    </>
  );
});
