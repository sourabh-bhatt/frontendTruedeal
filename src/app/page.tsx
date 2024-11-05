import Image from "next/image";
import HeroSection from "./components/homepage/HeroSection";
import Destination from "./components/homepage/Destinations";
import LiveForexRates from "./components/forex/LiveForexRates";
import Forex from "./components/forex/Forex";
import Ad from "./components/Ad/Ad";
import Testimonials from "./components/Ad/Testimonials";
import Sponsors from "./components/Ad/Sponsers";


export default function Home() {
  return (
    <>

      <HeroSection />
      <Destination />
      <LiveForexRates />
      <Forex />
      <Ad />
      <Testimonials />
      <Sponsors />
    </>
  );
}
