import Hero from "./components/Home/Hero";
import Location from "./components/Home/Location";
import Aboutus from "./components/Home/Aboutus";
import Residential from "./components/Home/Residential";
import Facilities from "./components/Home/Facilities";
import Contact from "./components/Home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Location />
      <Aboutus />
      <Residential />
      <Facilities />
      <Contact />
    </div>
  );
}
