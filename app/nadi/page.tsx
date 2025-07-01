import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Nadi/Hero";
import Introduction from "../components/Nadi/Introduction";
import Residential from "../components/Nadi/Residential";
import Facilities from "../components/Nadi/Facilities";
import IntroductionOrussey from "../components/Orussey/Introduction";
import GalleryOrussey from "../components/Orussey/Gallery";
import VideoOrussey from "../components/Orussey/Video";

function Nadi() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Residential />
      <Facilities />
      <IntroductionOrussey />
      <GalleryOrussey />
      <VideoOrussey />
      <Footer />
    </div>
  );
}

export default Nadi;
