import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="flex flex-col w-full">
        <Navbar />
        <Slider />
        <Services />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
