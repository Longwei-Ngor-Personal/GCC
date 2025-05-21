import Footer from "../components/Footer";
import SuperAbout from "../components/Super/SuperAbout";
import SuperBackground from "../components/Super/SuperBackground";
import SuperFocus from "../components/Super/SuperFocus";
import SuperHero from "../components/Super/SuperHero";
import SuperSketches from "../components/Super/SuperSketches";

function SuperPage() {
  return (
    <>
      <SuperHero />
      <SuperAbout />
      <SuperBackground />
      <SuperFocus />
      <SuperSketches />
      <Footer />
    </>
  );
}

export default SuperPage;
