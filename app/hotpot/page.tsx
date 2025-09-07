import React from "react";
// import HotpotHero from "../components/Hotpot/HotpotHero";
// import HotpotEnvironment from "../components/Hotpot/HotpotEnvironment";
// import HotpotDish from "../components/Hotpot/HotpotDish";
import FBHero from "../components/Hotpot/FBHero";
import FBLuk from "../components/Hotpot/FBLuk";
import FBCantonese from "../components/Hotpot/FBCantonese";
import Footer from "../components/Footer";

function HotpotPage() {
  return (
    <>
      {/* <HotpotHero />
      <HotpotEnvironment />
      <HotpotDish /> */}
      <FBHero />
      <FBLuk />
      <FBCantonese />
      <Footer />
    </>
  );
}

export default HotpotPage;
