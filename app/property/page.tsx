import SohoHero from "../components/Soho/SohoHero";
import SohoAbout from "../components/Soho/SohoAbout";
import SohoInspiration from "../components/Soho/SohoInspiration";
import SohoEnvironment from "../components/Soho/SohoEnvironment";
import SohoFeatures from "../components/Soho/SohoFeatures";
import SohoLocation from "../components/Soho/SohoLocation";

function PropertyManagementPage() {
  return (
    <>
      <SohoHero />
      <SohoAbout />
      <SohoInspiration />
      <SohoFeatures />
      <SohoEnvironment />
      <SohoLocation />
    </>
  );
}

export default PropertyManagementPage;
