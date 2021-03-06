import React from "react";
import Features from "./Features";
import StayProductive from "./StayProductive";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

const Main = () => {
  return (
    <main className="z-20 flex w-[21rem] flex-col items-center xl:w-[77.188rem]">
      <Features />
      <StayProductive />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Main;
