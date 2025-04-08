import React from "react";
import HotpotHero from "../components/Hotpot/HotpotHero";
import HotpotAbout from "../components/Hotpot/HotpotAbout";
import HotpotEnvironment from "../components/Hotpot/HotpotEnvironment";
import HotpotDish from "../components/Hotpot/HotpotDish";
import HotpotLocation from "../components/Hotpot/HotpotLocation";
import Footer from "../components/Footer";

function HotpotPage() {
  return (
    <>
      <HotpotHero />
      <HotpotAbout />
      <HotpotEnvironment />
      <HotpotDish />
      <HotpotLocation />
      <Footer />
    </>
  );
}

export default HotpotPage;
