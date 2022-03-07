import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import bgPatternMobile from "./images/bg-curvy-mobile.svg";
import bgPatternDesktop from "./images/bg-curvy-desktop.svg";

function App() {
  return (
    <div className="bg relative grid place-items-center overflow-y-hidden bg-[#1b2330] font-['Open_Sans']">
      <div className="absolute top-[17.5rem] w-full max-w-[26.75rem] xl:top-[53rem] xl:max-w-[90rem]">
        <img className="w-full xl:hidden" src={bgPatternMobile} alt="" />
        <img className="hidden w-full xl:block" src={bgPatternDesktop} alt="" />
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
