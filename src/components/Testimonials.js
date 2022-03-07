import React from "react";
import Profile1 from "../images/profile-1.jpg";
import Profile2 from "../images/profile-2.jpg";
import Profile3 from "../images/profile-3.jpg";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <div className="relative z-10 mb-[10rem] flex w-[17.5rem] flex-col items-center">
      <p className="absolute left-0 top-0 -mt-[0.188rem] w-8 font-['Nunito_Sans'] text-[5rem] font-normal leading-[3.125rem] tracking-widest text-[#62E0D9]">
        “
      </p>
      <div className="mt-[0.563rem] flex w-full flex-col items-center gap-6">
        <Testimony
          img={Profile1}
          person="Satish Patel"
          title="Founder & CEO, Huddle"
        />
        <Testimony
          img={Profile2}
          person="Bruce McKenzie"
          title="Founder & CEO, Huddle"
        />
        <Testimony
          img={Profile3}
          person="Iva Boyd"
          title="Founder & CEO, Huddle"
        />
      </div>
    </div>
  );
};

export default Testimonials;
