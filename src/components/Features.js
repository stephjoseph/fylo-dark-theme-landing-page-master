import React from "react";
import Feature from "./Feature";
import iconAccess from "../images/icon-access-anywhere.svg";
import iconSecurity from "../images/icon-security.svg";
import iconCollaboration from "../images/icon-collaboration.svg";
import iconFile from "../images/icon-any-file.svg";

const Features = () => {
  return (
    <section className="mb-[10rem] grid items-center gap-20">
      <Feature
        img={iconAccess}
        width={document.documentElement.clientWidth > 1280 ? "84" : "64.47"}
        height={document.documentElement.clientWidth > 1280 ? "78" : "59.81"}
        header="Access your files, anywhere"
        text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <Feature
        img={iconSecurity}
        width={document.documentElement.clientWidth > 1280 ? "66" : "50.77"}
        height={document.documentElement.clientWidth > 1280 ? "84" : "64.62"}
        header="Security you can trust"
        text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <Feature
        img={iconCollaboration}
        width={document.documentElement.clientWidth > 1280 ? "84" : "64.62"}
        height={document.documentElement.clientWidth > 1280 ? "69" : "53.08"}
        header="Real-time collaboration"
        text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />
      <Feature
        img={iconFile}
        width={document.documentElement.clientWidth > 1280 ? "90" : "69.23"}
        height={document.documentElement.clientWidth > 1280 ? "63" : "48.46"}
        header="Store any type of file"
        text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </section>
  );
};

export default Features;
