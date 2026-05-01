import Lanyard from "@/components/3d/Lanyard";
import ShapeGrid from "@/components/ShapeGrid/ShapeGrid"; // Sesuaikan path jika perlu
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity"; // Sesuaikan path jika perlu

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f18] text-white flex flex-col">
      
      {/* 
        === HERO SECTION (JUMBOTRON) === 
      */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background ShapeGrid */}
        <div className="absolute inset-0 z-0 opacity-40">
          <ShapeGrid 
            color="#25406D" // Menggunakan Navy Blue
            speed={0.5}
            squareSize={40}
            direction='diagonal'
            borderColor="#152440"
            hoverFillColor='#72B9F1' // Hover jadi Light Blue
            shape='square'
            hoverTrailAmount={2}
          />
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full gap-8">
          
          {/* Left: Professional Summary Card (Neo-Brutalism) */}
          <div className="flex-1 w-full flex flex-col gap-6">
            <div className="bg-[#25406D]/90 backdrop-blur-sm border-4 border-[#72B9F1] shadow-[8px_8px_0_0_#72B9F1] p-8">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase leading-none">
                Backend <br /> Architect.
              </h1>
              <p className="text-lg text-zinc-300 font-mono mb-6">
                Membangun ekosistem yang persisten. Dari arsitektur microservices, integrasi LLM/AI, hingga deployment otomatisasi CI/CD.
              </p>
              
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="px-3 py-1 bg-[#72B9F1] text-[#25406D]">Node.js</span>
                <span className="px-3 py-1 bg-[#72B9F1] text-[#25406D]">Laravel</span>
                <span className="px-3 py-1 bg-[#72B9F1] text-[#25406D]">FastAPI</span>
                <span className="px-3 py-1 bg-[#72B9F1] text-[#25406D]">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Lanyard Interactive */}
          <div className="flex-1 w-full h-[500px] md:h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
             <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>

        </div>
      </section>

      {/* 
        === DIVIDER: SCROLL VELOCITY === 
      */}
      <section className="w-full border-y-4 border-[#72B9F1] bg-[#25406D] py-4 overflow-hidden z-20">
        <ScrollVelocity
          texts={['Language Agnostic • Cloud Native • AI Integration •']} 
          velocity={80}
          className="text-4xl font-black uppercase text-white tracking-widest"
          numCopies={4}
          damping={50}
          stiffness={400}
        />
      </section>

      {/* 
        === BENTO GRID PLACEHOLDER === 
      */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24 z-10 relative">
        <h2 className="text-3xl font-black mb-10 text-[#72B9F1] uppercase">System Overview_</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 h-64 bg-zinc-900 border-2 border-white shadow-[4px_4px_0_0_#25406D]"></div>
          <div className="col-span-1 h-64 bg-zinc-900 border-2 border-white shadow-[4px_4px_0_0_#72B9F1]"></div>
          <div className="col-span-1 h-64 bg-zinc-900 border-2 border-white shadow-[4px_4px_0_0_#72B9F1]"></div>
          <div className="col-span-1 md:col-span-2 h-64 bg-zinc-900 border-2 border-white shadow-[4px_4px_0_0_#25406D]"></div>
        </div>
      </section>

    </main>
  );
}