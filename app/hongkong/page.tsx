import React from "react";
import HongKongHero from "../components/Hongkong/HongKongHero";
import HongkongAbout from "../components/Hongkong/HongkongAbout";
import Footer from "../components/Footer";
import HongkongMission from "../components/Hongkong/HongkongMission";
import HongkongPhoto from "../components/Hongkong/HongkongPhoto";
import ChinaAbout from "../components/Hongkong/ChinaAbout";
import JapanHero from "../components/Japan/JapanHero";
import JapanAbout from "../components/Japan/JapanAbout";
import JapanMission from "../components/Japan/JapanMission";
import JapanTeam from "../components/Japan/JapanTeam";
import JapanPhoto from "../components/Japan/JapanPhoto";

function HongKongPage() {
  return (
    <>
      <HongKongHero />
      <HongkongAbout />
      <HongkongMission />
      <HongkongPhoto />
      <ChinaAbout />
      <JapanHero />
      <JapanAbout />
      <JapanMission />
      <JapanTeam />
      <JapanPhoto />
      <Footer />
    </>
  );
}

export default HongKongPage;
