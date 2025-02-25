import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Nadi/Hero";
import Introduction from "../components/Nadi/Introduction";
import LocationShowcase from "../components/Nadi/Location";

function Nadi() {
  return (
    <div>
      <Hero />
      <Introduction />
      <LocationShowcase />
      <Footer />
    </div>
  );
}

export default Nadi;
