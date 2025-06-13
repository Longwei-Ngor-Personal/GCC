import Footer from "../components/Footer";
import FundAbout from "../components/Fund/FundAbout";
import FundBackground from "../components/Fund/FundBackground";
import FundHero from "../components/Fund/FundHero";
import FundPartners from "../components/Fund/FundPartners";
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
      <FundHero />
      <FundAbout />
      <FundBackground />
      <FundPartners />
      <Footer />
    </>
  );
}

export default GCTrustPage;
