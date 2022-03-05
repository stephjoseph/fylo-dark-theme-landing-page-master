import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import bgPatternMobile from "./images/bg-curvy-mobile.svg";

function App() {
  return (
    <div className="relative grid place-items-center bg-[#1b2330] font-['Open_Sans']">
      <div className="absolute top-[17.5rem] w-full max-w-[26.75rem]">
        <img className="w-full" src={bgPatternMobile} alt="" />
      </div>
      <Header />
      <Main />
      <Footer />
      <div className="z-10">
        Access your files, anywhere The ability to use a smartphone, tablet, or
        computer to access your account means your files follow you everywhere.
        Security you can trust 2-factor authentication and user-controlled
        encryption are just a couple of the security features we allow to help
        secure your files. Real-time collaboration Securely share files and
        folders with friends, family and colleagues for live collaboration. No
        email attachments required. Store any type of file Whether you're
        sharing holidays photos or work documents, Fylo has you covered allowing
        for all file types to be securely stored and shared. Stay productive,
        wherever you are Never let location be an issue when accessing your
        files. Fylo has you covered for all of your file storage needs. Securely
        share files and folders with friends, family and colleagues for live
        collaboration. No email attachments required. See how Fylo works Fylo
        has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine. Satish Patel Founder & CEO, Huddle Fylo has improved our team
        productivity by an order of magnitude. Since making the switch our team
        has become a well-oiled collaboration machine. Bruce McKenzie Founder &
        CEO, Huddle Fylo has improved our team productivity by an order of
        magnitude. Since making the switch our team has become a well-oiled
        collaboration machine. Iva Boyd Founder & CEO, Huddle Get early access
        today It only takes a minute to sign up and our free starter tier is
        extremely generous. If you have any questions, our support team would be
        happy to help you. Get Started For Free Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua +1-543-123-4567 example@fylo.com About Us Jobs
        Press Blog Contact Us Terms Privacy
      </div>
    </div>
  );
}

export default App;
