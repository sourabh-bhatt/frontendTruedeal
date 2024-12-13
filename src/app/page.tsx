import HeroSection from "./components/homepage/HeroSection";
import Destination from "./components/homepage/Destinations";
import LiveForexRates from "./components/forex/LiveForexRates";
import Ad from "./components/Ad/Ad";
import Sponsors from "./components/Ad/Sponsers";
import Trending from "./components/homepage/Trending";
import CurrencyExchange from "./components/forex/ForexLive";
import Exclusive from "./components/forex/Exclusive";
import { AnimatedListDemo } from "./components/CardsSwap";
import HappyCustomers from "./components/Ad/HappyCustomers";
import ChatBot from './components/ChatBot/ChatBot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Destination />
      <Trending />
      <CurrencyExchange />
      {/* <LiveForexRates /> */}
      <Exclusive />
      <AnimatedListDemo />
      <Ad />
      {/* <Testimonials /> */}
      <HappyCustomers />
      {/* <TestimonialCard /> */}
      <Sponsors />
      <ChatBot />
    </main>
  );
}
