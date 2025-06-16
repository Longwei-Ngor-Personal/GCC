import React from "react";
import HotpotHero from "../components/Hotpot/HotpotHero";
import HotpotAbout from "../components/Hotpot/HotpotAbout";
import HotpotEnvironment from "../components/Hotpot/HotpotEnvironment";
import HotpotDish from "../components/Hotpot/HotpotDish";
import HotpotLocation from "../components/Hotpot/HotpotLocation";
import Footer from "../components/Footer";
import BakkuttehAbout from "../components/Bakkutteh/BakkuttehAbout";
import BakkuttehBackground from "../components/Bakkutteh/BakkuttehBackground";
import BakkuttehFeatures from "../components/Bakkutteh/BakkuttehFeatures";
import BakkuttehGallery from "../components/Bakkutteh/BakkuttehGallery";
import BakkuttehHero from "../components/Bakkutteh/BakkuttehHero";
import HKAbout from "../components/HongkongResturant/HKAbout";
import HKAuthentic from "../components/HongkongResturant/HKAuthentic";
import HKBackground from "../components/HongkongResturant/HKBackground";
import HKHero from "../components/HongkongResturant/HKHero";
import HKJourney from "../components/HongkongResturant/HKJourney";
import HKTeam from "../components/HongkongResturant/HKTeam";
import SuperAbout from "../components/Super/SuperAbout";
import SuperBackground from "../components/Super/SuperBackground";
import SuperFocus from "../components/Super/SuperFocus";
import SuperHero from "../components/Super/SuperHero";
import SuperSketches from "../components/Super/SuperSketches";

function HotpotPage() {
  return (
    <>
      <HotpotHero />
      <HotpotAbout />
      <HotpotEnvironment />
      <HotpotDish />
      <HotpotLocation />
      <BakkuttehHero />
      <BakkuttehAbout />
      <BakkuttehBackground />
      <BakkuttehFeatures />
      <BakkuttehGallery />
      <HKHero />
      <HKAbout />
      <HKJourney />
      <HKTeam />
      <HKBackground />
      <HKAuthentic />
      <SuperHero />
      <SuperAbout />
      <SuperBackground />
      <SuperFocus />
      <SuperSketches />
      <Footer />
    </>
  );
}

export default HotpotPage;
