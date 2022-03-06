import React from "react";
import CardsSection from "./CardsSection";
import StayProductive from "./StayProductive";

const Main = () => {
  return (
    <main className="z-10 flex w-[21rem] flex-col items-center">
      <CardsSection />
      <StayProductive />
    </main>
  );
};

export default Main;
