import React from "react";
import HotpotHero from "../components/Hotpot/HotpotHero";
import HotpotEnvironment from "../components/Hotpot/HotpotEnvironment";
import HotpotDish from "../components/Hotpot/HotpotDish";
import Footer from "../components/Footer";

function HotpotPage() {
  return (
    <>
      <HotpotHero />
      <HotpotEnvironment />
      <HotpotDish />
      <Footer />
    </>
  );
}

export default HotpotPage;
