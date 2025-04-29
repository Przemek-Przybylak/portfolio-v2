import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="w-full h-screen overflow px-[10%] flex flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
