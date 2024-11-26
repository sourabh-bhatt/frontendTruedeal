import HeroSection from "./components/homepage/HeroSection";
import Destination from "./components/homepage/Destinations";
import LiveForexRates from "./components/forex/LiveForexRates";
import Forex from "./components/forex/Forex";
import Ad from "./components/Ad/Ad";
import Testimonials from "./components/Ad/Testimonials";
import Sponsors from "./components/Ad/Sponsers";
import Trending from "./components/homepage/Trending";
import CurrencyExchange from "./components/forex/ForexLive";
import Founder from "./components/common/Founder";

export default function Home() {
  return (
    <>

      <HeroSection />
      <Destination />
      <Trending />
      <CurrencyExchange />
      <LiveForexRates />
      <Forex />
      <Ad />
      <Testimonials />
      <Sponsors />
      <Founder />
    </>
  );
}
