import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="flex flex-col w-full">
        <Navbar />
        <Slider />
      </main>
    </div>
  );
}
