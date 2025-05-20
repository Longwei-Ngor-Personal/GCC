import Footer from "../components/Footer";
import MediaAbout from "../components/Media/MediaAbout";
import MediaAdvertisement from "../components/Media/MediaAdvertisement";
import MediaAmbassadors from "../components/Media/MediaAmbassadors";
import MediaBackground from "../components/Media/MediaBackground";
import MediaEventPlanning from "../components/Media/MediaEventPlanning";
import MediaHero from "../components/Media/MediaHero";
import MediaLEDBoard from "../components/Media/MediaLEDBaord";
import MediaPhotography from "../components/Media/MediaPhotography";
import MediaSocialResources from "../components/Media/MediaSocialResources";
import MediaStrengths from "../components/Media/MediaStrengths";

function MediaPage() {
  return (
    <>
      <MediaHero />
      <MediaAbout />
      <MediaStrengths />
      <MediaBackground />
      <MediaPhotography />
      <MediaAmbassadors />
      <MediaEventPlanning />
      <MediaSocialResources />
      <MediaAdvertisement />
      <MediaLEDBoard />
      <Footer />
    </>
  );
}

export default MediaPage;
