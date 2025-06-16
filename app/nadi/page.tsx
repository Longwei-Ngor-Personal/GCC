import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Nadi/Hero";
import Introduction from "../components/Nadi/Introduction";
import LocationShowcase from "../components/Nadi/Location";
import Residential from "../components/Nadi/Residential";
import Facilities from "../components/Nadi/Facilities";
import SohoHero from "../components/Soho/SohoHero";
import SohoAbout from "../components/Soho/SohoAbout";
import SohoInspiration from "../components/Soho/SohoInspiration";
import SohoEnvironment from "../components/Soho/SohoEnvironment";
import SohoFeatures from "../components/Soho/SohoFeatures";
import SohoLocation from "../components/Soho/SohoLocation";

function Nadi() {
  return (
    <div>
      <Hero />
      <Introduction />
      <LocationShowcase />
      <Residential />
      <Facilities />
      <SohoHero />
      <SohoAbout />
      <SohoInspiration />
      <SohoFeatures />
      <SohoEnvironment />
      <SohoLocation />
      <Footer />
    </div>
  );
}

export default Nadi;
