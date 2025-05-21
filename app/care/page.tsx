import CareAbout from "../components/Care/CareAbout";
import CareActivities from "../components/Care/CareActivities";
import CareCharity from "../components/Care/CareCharity";
import CareHero from "../components/Care/CareHero";
import Footer from "../components/Footer";

function GCCarePage() {
  return (
    <>
      <CareHero />
      <CareAbout />
      <CareActivities />
      <CareCharity />
      <Footer />
    </>
  );
}

export default GCCarePage;
