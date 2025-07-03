import Footer from "../components/Footer";
import FundAbout from "../components/Fund/FundAbout";
import FundBackground from "../components/Fund/FundBackground";
import FundHero from "../components/Fund/FundHero";
import LandAbout from "../components/Land/LandAbout";
import LandGallery from "../components/Land/LandGallery";
import InvestmentProjects from "../components/Trust/Projects/Investment";
import TrustAbout from "../components/Trust/TrustAbout";
import TrustBackground from "../components/Trust/TrustBackground";
import TrustHero from "../components/Trust/TrustHero";
import TrustWhy from "../components/Trust/TrustWhy";

function GCTrustPage() {
  return (
    <>
      <TrustHero />
      <TrustAbout />
      <TrustBackground />
      <TrustWhy />
      <LandAbout />
      <LandGallery />
      <FundHero />
      <FundAbout />
      <FundBackground />
      <InvestmentProjects />
      <Footer />
    </>
  );
}

export default GCTrustPage;
