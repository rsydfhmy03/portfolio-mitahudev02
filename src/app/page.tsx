import Lanyard from "@/components/3d/Lanyard";
import ShapeGrid from "@/components/ShapeGrid/ShapeGrid"; 
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity"; 
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f18] text-white flex flex-col">
      
      <section className="relative w-full h-screen overflow-hidden bg-[#0a0f18]">
        
        {/* Background Grid - Dibuat redup agar tidak menutupi teks */}
        <div className="absolute inset-0 z-0 opacity-20">
          <ShapeGrid 
            // color="#25406D"
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
          
          <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-6 lg:px-4 pt-28 pb-10 z-20 pointer-events-none">
            <div className="pointer-events-auto">
              
              {/* Badge Ala Agus Sugandi tapi gaya Neo-Brutalism */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#72B9F1] text-[#25406D] font-black font-mono text-sm mb-6 border-2 border-white shadow-[4px_4px_0_0_#25406D]">
                <span>I&apos;m Ready For Job</span>
                <span className="w-2 h-2 bg-[#25406D] rounded-full animate-pulse"></span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 leading-[1.1] uppercase">
                I&apos;m Fahmy Rosyadi <br />
                <span className="text-[#72B9F1]">Backend Dev.</span>
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

              <button className="px-8 py-4 bg-transparent border-4 border-[#72B9F1] text-[#72B9F1] font-black uppercase tracking-widest hover:bg-[#72B9F1] hover:text-[#25406D] transition-colors shadow-[6px_6px_0_0_#72B9F1] hover:shadow-[2px_2px_0_0_#72B9F1] hover:translate-y-1 hover:translate-x-1 duration-200">
                Consultation Now
              </button>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-full lg:w-[50%] h-screen z-10 cursor-grab active:cursor-grabbing">
            <Lanyard position={[0, -1, 13]} gravity={[0, -40, 0]} fov={25} />
          </div>

        </div>
      </section>

      {/* === DIVIDER: SCROLL VELOCITY === */}
      <section className="w-full border-y-4 border-[#72B9F1] bg-[#25406D] py-4 overflow-hidden z-20">
        <ScrollVelocity
          texts={['Mitahudev • Fahmy Rosyadi •']} 
          velocity={60}
          className="text-4xl font-black uppercase text-white tracking-widest"
          numCopies={4}
          damping={50}
          stiffness={400}
        />
      </section>

      {/* 
        === BENTO GRID: SYSTEM OVERVIEW === 
        FIX Alignment: Menggunakan max-w-7xl dan px-6 lg:px-4 agar lurus presisi dengan Hero Section
      */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-4 py-24 z-10 relative">
        <h2 className="text-3xl font-black mb-10 text-[#72B9F1] uppercase flex items-center gap-4">
          <span className="w-12 h-2 bg-[#72B9F1] inline-block"></span>
          System Overview_
        </h2>
        
        {/* CSS Grid - 3 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          
          {/* BOX 1: LATEST EXPERIENCE (Makan 2 Kolom) */}
          <div className="col-span-1 lg:col-span-2 bg-[#25406D]/80 backdrop-blur-sm border-2 border-[#72B9F1] shadow-[6px_6px_0_0_#72B9F1] p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide">Backend Developer</h3>
                  <p className="text-[#72B9F1] font-bold font-mono">PT Link Apisindo Media (Profile Image Studio)</p>
                </div>
                <span className="px-3 py-1 bg-white text-[#25406D] font-black text-xs border-2 border-white">OCT 2025 - APR 2026</span>
              </div>
              <ul className="text-zinc-300 font-mono text-sm space-y-2 list-disc list-inside">
                <li>Modernisasi arsitektur backend dari AdonisJS ke <strong className="text-white">Next.js API Routes</strong> (ICCN V2) dengan optimasi skema PostgreSQL (JSONB).</li>
                <li>Implementasi <strong className="text-white">Asynchronous Queues via Redis</strong>, menurunkan beban server hingga 40% pada jam sibuk.</li>
                <li>Membangun API Bridge untuk integrasi <strong className="text-white">Keycloak SSO & OAuth 2.0</strong> dengan AI Chatbot (FastAPI).</li>
              </ul>
            </div>
          </div>

          {/* BOX 2: CORE TECH STACK (1 Kolom) */}
          <div className="col-span-1 bg-[#72B9F1] border-2 border-white shadow-[6px_6px_0_0_#25406D] p-6 text-[#25406D] flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-black uppercase mb-4 border-b-4 border-[#25406D] pb-2">Core Stack.</h3>
            {/* Konsep Sticker Badges untuk Skill */}
            <div className="flex flex-wrap gap-2 font-mono font-bold text-sm">
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">PHP (Laravel)</span>
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">Java (Spring Boot)</span>
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">Node.js</span>
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">Python (FastAPI)</span>
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">PostgreSQL</span>
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">Redis</span>
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">Docker</span>
              <span className="px-3 py-1 bg-white border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">GCP</span>
            </div>
          </div>

          {/* BOX 3: FEATURED PROJECT (Makan 2 Kolom) */}
          <div className="col-span-1 lg:col-span-2 bg-[#0a0f18] border-2 border-white shadow-[6px_6px_0_0_#25406D] p-6 flex flex-col md:flex-row gap-6 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25406D] text-[#72B9F1] font-black text-xs border-2 border-[#72B9F1] mb-3">
                <span className="w-2 h-2 bg-[#72B9F1] rounded-full animate-ping"></span> Live Project
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">Gansdoctor App</h3>
              <p className="text-zinc-400 font-mono text-sm mb-4">
                Sistem klasifikasi biner untuk mendeteksi wajah deepfake menggunakan arsitektur Deep Learning VGG16 dengan akurasi tinggi.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-zinc-300">
                <span className="px-2 py-1 bg-zinc-800 border border-zinc-600">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-800 border border-zinc-600">OpenCV</span>
                <span className="px-2 py-1 bg-zinc-800 border border-zinc-600">Google Cloud Run</span>
              </div>
            </div>
          </div>

          {/* BOX 4: CREDENTIALS (1 Kolom) */}
          <div className="col-span-1 bg-white border-2 border-[#25406D] shadow-[6px_6px_0_0_#72B9F1] p-6 text-[#25406D] flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-black uppercase mb-4 border-b-4 border-[#25406D] pb-2">Credentials.</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm">BNSP Web Developer</h4>
                <p className="font-mono text-xs text-zinc-600">Badan Nasional Sertifikasi Profesi</p>
              </div>
              <div>
                <h4 className="font-bold text-sm">Menjadi Google Cloud Engineer</h4>
                <p className="font-mono text-xs text-zinc-600">Dicoding Indonesia</p>
              </div>
              <div>
                <h4 className="font-bold text-sm">Machine Learning dengan GCP</h4>
                <p className="font-mono text-xs text-zinc-600">Dicoding Indonesia</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}