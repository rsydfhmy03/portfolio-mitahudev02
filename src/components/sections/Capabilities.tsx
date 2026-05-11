export default function Capabilities() {
  const services = [
    {
      title: "Backend Architecture",
      desc: "Merancang API yang persisten, microservices, dan database dinamis (PostgreSQL/JSONB).",
      tags: ["Node.js", "Laravel", "Redis", "Keycloak"]
    },
    {
      title: "Frontend Development",
      desc: "Membangun antarmuka yang responsif dan interaktif dengan optimasi performa tinggi.",
      tags: ["Next.js", "React", "Tailwind", "Framer Motion"]
    },
    {
      title: "AI & CV Integration",
      desc: "Menjembatani model Deep Learning (VGG16) ke dalam inference API yang siap produksi.",
      tags: ["Python", "FastAPI", "TensorFlow", "GCP"]
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-4 py-24 bg-[#0a0f18]">
      <h2 className="text-4xl font-black text-white mb-12 uppercase italic">What I Can Do_</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group p-8 border-4 border-[#72B9F1] bg-[#25406D] shadow-[8px_8px_0_0_#72B9F1] hover:bg-[#72B9F1] transition-all">
            <h3 className="text-2xl font-black text-white group-hover:text-[#25406D] mb-4 uppercase">{s.title}</h3>
            <p className="text-zinc-300 group-hover:text-[#25406D]/80 font-mono text-sm mb-6">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-[#0a0f18] text-[#72B9F1] text-[10px] font-bold border border-white uppercase">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}