import Lanyard from "@/components/3d/Lanyard";
import ShapeGrid from "@/components/ShapeGrid/ShapeGrid"; 
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f18] text-white flex flex-col">
      
      {/* 
        === HERO SECTION === 
        Tinggi h-screen penuh agar tali lanyard bisa menggantung lurus dari luar layar
      */}
      <section className="relative w-full h-screen overflow-hidden bg-[#0a0f18]">
        
        {/* Background Grid - Dibuat redup agar tidak menutupi teks */}
        <div className="absolute inset-0 z-0 opacity-20">
          <ShapeGrid 
            color="#25406D"
            speed={0.5}
            squareSize={50} // Grid dibesarkan sedikit biar lebih lega
            direction='diagonal'
            borderColor="#152440"
            hoverFillColor='#72B9F1'
            shape='square'
            hoverTrailAmount={2}
          />
        </div>

        {/* Content Container */}
        <div className="relative w-full h-full flex flex-col lg:flex-row max-w-7xl mx-auto">
          
          {/* 
            LEFT SIDE: Resume Text 
            Z-index tinggi agar bisa diseleksi, pointer-events-none di kontainer luar
            agar Lanyard di belakangnya tetap bisa di-drag jika saling tumpang tindih.
          */}
          <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-6 lg:px-4 pt-28 pb-10 z-20 pointer-events-none">
            <div className="pointer-events-auto">
              
              {/* Badge Ala Agus Sugandi tapi gaya Neo-Brutalism */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#72B9F1] text-[#25406D] font-black font-mono text-sm mb-6 border-2 border-white shadow-[4px_4px_0_0_#25406D]">
                <span>I'm Ready For Job</span>
                <span className="w-2 h-2 bg-[#25406D] rounded-full animate-pulse"></span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 leading-[1.1] uppercase">
                I'm Fahmy Rosyadi <br />
                <span className="text-[#72B9F1]">Backend Architect.</span>
              </h1>
              
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-mono">
                FullStack Developer dengan fokus utama Backend Engineering yang adaptif (Language Agnostic). Berpengalaman mengorkestrasi ekosistem Node.js, PHP (Laravel), arsitektur microservices, hingga integrasi inference API untuk model Deep Learning ke lingkungan produksi.
              </p>
              
              {/* Tech Stack Tags dari Resume */}
              <div className="flex flex-wrap gap-3 font-mono text-sm font-bold mb-10">
                <span className="px-3 py-1 border-2 border-[#72B9F1] text-[#72B9F1] bg-[#25406D]">Node.js</span>
                <span className="px-3 py-1 border-2 border-[#72B9F1] text-[#72B9F1] bg-[#25406D]">Laravel</span>
                <span className="px-3 py-1 border-2 border-[#72B9F1] text-[#72B9F1] bg-[#25406D]">FastAPI</span>
                <span className="px-3 py-1 border-2 border-[#72B9F1] text-[#72B9F1] bg-[#25406D]">PostgreSQL</span>
                <span className="px-3 py-1 border-2 border-[#72B9F1] text-[#72B9F1] bg-[#25406D]">GCP</span>
              </div>

              {/* Call to Action */}
              <button className="px-8 py-4 bg-transparent border-4 border-[#72B9F1] text-[#72B9F1] font-black uppercase tracking-widest hover:bg-[#72B9F1] hover:text-[#25406D] transition-colors shadow-[6px_6px_0_0_#72B9F1] hover:shadow-[2px_2px_0_0_#72B9F1] hover:translate-y-1 hover:translate-x-1 duration-200">
                Consultation Now
              </button>
            </div>
          </div>

          {/* 
            RIGHT SIDE: 3D Lanyard yang Raksasa 
            Posisi absolute memakan separuh layar, mulai dari top-0.
          */}
          <div className="absolute right-0 top-0 w-full lg:w-[50%] h-screen z-10 cursor-grab active:cursor-grabbing">
            {/* 
              KUNCI UKURAN: position Z diubah dari 30 -> 13 agar sangat nge-zoom.
              Karena kamera dekat, titik gantung tali (Y=4) sekarang berada di luar batas layar atas, 
              sehingga tali seolah-olah menggantung dari langit-langit browser.
            */}
            <Lanyard position={[0, -1, 13]} gravity={[0, -40, 0]} fov={25} />
          </div>

        </div>
      </section>

      {/* === DIVIDER: SCROLL VELOCITY === */}
      <section className="w-full border-y-4 border-[#72B9F1] bg-[#25406D] py-4 overflow-hidden z-20">
        <ScrollVelocity
          texts={['Language Agnostic • Cloud Native • AI Integration • Asynchronous Queues •']} 
          velocity={60}
          className="text-4xl font-black uppercase text-white tracking-widest"
          numCopies={4}
          damping={50}
          stiffness={400}
        />
      </section>

      {/* === BENTO GRID PLACEHOLDER === */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24 z-10 relative">
        <h2 className="text-3xl font-black mb-10 text-[#72B9F1] uppercase">System Overview_</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 h-64 bg-[#25406D]/50 backdrop-blur border-2 border-[#72B9F1] shadow-[6px_6px_0_0_#25406D]"></div>
          <div className="col-span-1 h-64 bg-[#25406D]/50 backdrop-blur border-2 border-[#72B9F1] shadow-[6px_6px_0_0_#72B9F1]"></div>
        </div>
      </section>

    </main>
  );
}