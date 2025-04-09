import React from "react";
import HongKongHero from "../components/Hongkong/HongKongHero";
import HongkongAbout from "../components/Hongkong/HongkongAbout";
import Footer from "../components/Footer";
import HongkongMission from "../components/Hongkong/HongkongMission";
import HongkongPhoto from "../components/Hongkong/HongkongPhoto";

function HongKongPage() {
  return (
    <>
      <HongKongHero />
      <HongkongAbout />
      <HongkongMission />
      <HongkongPhoto />
      <Footer />
    </>
  );
}

export default HongKongPage;
