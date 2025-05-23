import BakkuttehAbout from "../components/Bakkutteh/BakkuttehAbout";
import BakkuttehBackground from "../components/Bakkutteh/BakkuttehBackground";
import BakkuttehFeatures from "../components/Bakkutteh/BakkuttehFeatures";
import BakkuttehGallery from "../components/Bakkutteh/BakkuttehGallery";
import BakkuttehHero from "../components/Bakkutteh/BakkuttehHero";
import Footer from "../components/Footer";

function BakkuttehPage() {
  return (
    <>
      <BakkuttehHero />
      <BakkuttehAbout />
      <BakkuttehBackground />
      <BakkuttehFeatures />
      <BakkuttehGallery />
      <Footer />
    </>
  );
}

export default BakkuttehPage;
