import Footer from "../components/Footer";
import FundAbout from "../components/Fund/FundAbout";
import FundBackground from "../components/Fund/FundBackground";
import FundHero from "../components/Fund/FundHero";
import FundPartners from "../components/Fund/FundPartners";

function FundPage() {
  return (
    <div>
      <FundHero />
      <FundAbout />
      <FundBackground />
      <FundPartners />
      <Footer />
    </div>
  );
}

export default FundPage;
