import Hero from "./components/Home/Hero";
import Aboutus from "./components/Home/Aboutus";
import Contact from "./components/Footer";
import GroupBusiness from "./components/Home/GroupBusiness";
import Introduction from "./components/Home/Introduction";
import News from "./components/Home/News";

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <GroupBusiness />
      <News />
      <Aboutus />
      <Contact />
    </div>
  );
}
