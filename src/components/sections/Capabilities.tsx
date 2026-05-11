'use client';

import { 
  SiNodedotjs, 
  SiLaravel, 
  SiPostgresql, 
  SiRedis, 
  SiReact, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiPython, 
  SiFastapi, 
  SiTensorflow, 
  SiGooglecloud 
} from 'react-icons/si';

export default function Capabilities() {
  const services = [
    {
      title: "Backend Development",
      desc: "Merancang API yang persisten, arsitektur microservices, dan manajemen database dinamis skala menengah hingga besar.",
      techs: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" }
      ]
    },
    {
      title: "Frontend Development",
      desc: "Membangun antarmuka (UI/UX) yang responsif, interaktif, dan teroptimasi untuk memberikan pengalaman pengguna yang mulus.",
      techs: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      title: "AI & CV Integration",
      desc: "Menjembatani model Deep Learning dan Computer Vision (VGG16) ke dalam environment produksi sebagai Inference API.",
      techs: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "GCP", icon: SiGooglecloud, color: "#4285F4" }
      ]
    }
  ];

  return (
    <section className="w-full bg-[#E2E8F0] py-24 border-b-8 border-[#25406D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 flex items-center gap-4 w-full">
          <div className="bg-[#25406D] text-[#72B9F1] px-3 py-1 font-black text-xl md:text-2xl border-2 border-[#25406D] shadow-[3px_3px_0_0_#72B9F1]">
            01
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#25406D] uppercase tracking-tighter whitespace-nowrap">
            Core Capabilities_
          </h2>
          <div className="flex-1 h-1 bg-[#25406D] min-w-[50px] mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border-4 border-[#25406D] shadow-[8px_8px_0_0_#25406D] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#72B9F1] transition-all duration-300 flex flex-col"
            >
              <div className="bg-[#25406D] p-5 border-b-4 border-[#25406D] flex justify-between items-center">
                <h3 className="text-xl font-black text-[#72B9F1] uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>

              <div className="p-6 flex-grow flex flex-col gap-6">
                <p className="text-[#25406D]/90 font-mono text-sm font-bold leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-auto pt-6 border-t-2 border-dashed border-[#25406D]/30">
                  <div className="text-[10px] font-black text-[#25406D]/50 uppercase tracking-[0.2em] mb-3">
                    Tech Stack Terkait
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech, i) => {
                      const IconComponent = tech.icon;
                      return (
                        <div 
                          key={i} 
                          className="flex items-center gap-1.5 px-2 py-1 bg-[#E2E8F0] border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D] hover:bg-[#72B9F1] transition-colors cursor-default"
                        >
                          <IconComponent style={{ color: tech.color }} className="w-3.5 h-3.5 mix-blend-multiply" />
                          <span className="text-[10px] font-black text-[#25406D] uppercase">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}