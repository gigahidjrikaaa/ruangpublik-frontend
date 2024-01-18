import Hero from "@/components/LandingPage/Hero";
import Intro from "@/components/LandingPage/Intro";
import Register from "@/components/LandingPage/Register";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Register />
    </main>
  );
}
