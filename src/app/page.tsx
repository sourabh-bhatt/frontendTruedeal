import HeroSection from "./components/homepage/HeroSection";
import Destination from "./components/homepage/Destinations";
import Ad from "./components/Ad/Ad";
import Sponsors from "./components/Ad/Sponsers";
import Trending from "./components/homepage/Trending";
import CurrencyExchange from "./components/forex/ForexLive";
import Exclusive from "./components/forex/Exclusive";
import { AnimatedListDemo } from "./components/CardsSwap";
import HappyCustomers from "./components/Ad/HappyCustomers";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Destination />
      <Trending />
      <CurrencyExchange />
      <Exclusive />
      <AnimatedListDemo />
      <Ad />
      <HappyCustomers />
      <Sponsors />
    </main>
  );
}
