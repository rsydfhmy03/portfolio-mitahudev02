import Image from 'next/image';

const projects = [
  {
    title: "Gansdoctor App",
    category: "AI & COMPUTER VISION",
    desc: "Sistem klasifikasi wajah deepfake menggunakan arsitektur VGG16 dengan akurasi tinggi.",
    tech: ["FastAPI", "OpenCV", "Cloud Run"],
    image: "/vercel.svg" 
  },
  {
    title: "EventGrid SaaS",
    category: "BACKEND ARCHITECTURE",
    desc: "Simulasi platform SaaS untuk manajemen event dengan skalabilitas tinggi.",
    tech: ["Next.js", "PostgreSQL", "Redis"],
    image: "/next.svg"
  }
];

export default function Projects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-4 py-24">
      <h2 className="text-4xl font-black text-white mb-16 uppercase italic">Featured Missions_</h2>
      <div className="space-y-32">
        {projects.map((p, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="flex-1 w-full bg-[#25406D] border-4 border-[#72B9F1] shadow-[12px_12px_0_0_#72B9F1] relative group overflow-hidden">
              <div className="h-[300px] md:h-[400px] w-full relative">
                 <Image src={p.image} alt={p.title} fill className="object-contain p-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="text-[#72B9F1] font-black font-mono text-sm tracking-widest">{p.category}</span>
              <h3 className="text-5xl font-black text-white uppercase">{p.title}</h3>
              <p className="text-zinc-400 font-mono leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-3">
                {p.tech.map(t => <span key={t} className="px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-400">{t}</span>)}
              </div>
              <button className="mt-4 px-8 py-3 bg-white text-[#25406D] font-black border-2 border-white shadow-[4px_4px_0_0_#72B9F1] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase">
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}