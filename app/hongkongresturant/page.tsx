import Footer from "../components/Footer";
import HKAbout from "../components/HongkongResturant/HKAbout";
import HKAuthentic from "../components/HongkongResturant/HKAuthentic";
import HKBackground from "../components/HongkongResturant/HKBackground";
import HKHero from "../components/HongkongResturant/HKHero";
import HKJourney from "../components/HongkongResturant/HKJourney";
import HKTeam from "../components/HongkongResturant/HKTeam";

function HongKongResturantPage() {
  return (
    <>
      <HKHero />
      <HKAbout />
      <HKJourney />
      <HKTeam />
      <HKBackground />
      <HKAuthentic />
      <Footer />
    </>
  );
}

export default HongKongResturantPage;
