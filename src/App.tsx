import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-smoke-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <MenuSection />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
