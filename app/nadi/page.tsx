import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Nadi/Hero";
import Introduction from "../components/Nadi/Introduction";
import LocationShowcase from "../components/Nadi/Location";
import Residential from "../components/Nadi/Residential";
import Facilities from "../components/Nadi/Facilities";

function Nadi() {
  return (
    <div>
      <Hero />
      <Introduction />
      <LocationShowcase />
      <Residential />
      <Facilities />
      <Footer />
    </div>
  );
}

export default Nadi;
