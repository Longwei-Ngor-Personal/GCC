import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
}

export default GCTrustPage;
