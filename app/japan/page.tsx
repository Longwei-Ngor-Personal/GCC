import React from "react";
import JapanHero from "../components/Japan/JapanHero";
import JapanAbout from "../components/Japan/JapanAbout";
import JapanMission from "../components/Japan/JapanMission";
import JapanTeam from "../components/Japan/JapanTeam";
import JapanPhoto from "../components/Japan/JapanPhoto";
import Footer from "../components/Footer";

function JapanPage() {
  return (
    <>
      <JapanHero />
      <JapanAbout />
      <JapanMission />
      <JapanTeam />
      <JapanPhoto />
      <Footer />
    </>
  );
}

export default JapanPage;
