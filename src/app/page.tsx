import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Projects from "@/components/sections/Projects";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import LatestExperience from "@/components/sections/LatestExperience";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f18] text-white flex flex-col">
      <Hero />
      
      <section className="w-full border-y-4 border-[#72B9F1] bg-[#25406D] py-6 overflow-hidden z-20">
        <ScrollVelocity
          texts={['Mitahudev • Fahmy Rosyadi • Fullstack Developer •']} 
          velocity={60}
          className="text-5xl font-black uppercase text-white tracking-tighter"
          numCopies={4}
        />
      </section>

      <Capabilities />
      <LatestExperience />
      <Projects />
      <About />
    </main>
  );
}