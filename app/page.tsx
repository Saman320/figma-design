import FeatureWork from "./components/FeatureWork";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentPost from "./components/RecentPost";

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full h-[2453px] absolute bg-[#CFA6A61C]">
       <Navbar />
       <Hero />
       <RecentPost />
       <FeatureWork />
       <Footer />
      </div>
     
    </div>
  );
}
