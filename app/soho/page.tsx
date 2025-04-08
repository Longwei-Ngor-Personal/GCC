import React from "react";
import SohoHero from "../components/Soho/SohoHero";
import SohoAbout from "../components/Soho/SohoAbout";
import SohoInspiration from "../components/Soho/SohoInspiration";
import SohoEnvironment from "../components/Soho/SohoEnvironment";
import SohoFeatures from "../components/Soho/SohoFeatures";
import Footer from "../components/Footer";
import SohoLocation from "../components/Soho/SohoLocation";

function SohoPage() {
  return (
    <>
      <SohoHero />
      <SohoAbout />
      <SohoInspiration />
      <SohoFeatures />
      <SohoEnvironment />
      <SohoLocation />
      <Footer />
    </>
  );
}

export default SohoPage;
