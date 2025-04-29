import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="w-full overflow-hidden px-[15%]">
      <Navbar />
      Hello world
      <div className="fixed -bottom-[40px] -right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_left_bottom,var(--tw-gradient-stops)]from-secondary/15 to-transparent blur-[100px] pointer-events-none -z-50 mix-blend-mode-soft-light"></div>
    </main>
  );
}
