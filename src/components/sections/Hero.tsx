import Lanyard from "@/components/3d/Lanyard";
import ShapeGrid from "@/components/ShapeGrid/ShapeGrid";
import { Plus } from "lucide-react";
import { getSiteSettings } from "@/services/siteSettings";

export default async function Hero() {
  const settings = await getSiteSettings();

  const [firstName, ...lastNameArr] = (settings?.owner_name || 'FAHMY ROSYADI').split(' ');
  const lastName = lastNameArr.join(' ');

  return (
    <section className="relative w-full lg:h-screen pt-[72px] overflow-hidden border-b-8 border-[#25406D] bg-[#0a0f18]">
      
      <div className="absolute inset-0 flex flex-col lg:flex-row z-0">
        <div className="w-full h-[60%] lg:h-full lg:w-[55%] bg-[#F8FAFC]">
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#25406D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        </div>
        <div className="w-full h-[40%] lg:h-full lg:w-[45%] bg-[#25406D]">
           <div className="absolute inset-0 opacity-20">
             <ShapeGrid speed={0.4} squareSize={60} direction='diagonal' borderColor="#152440" hoverFillColor='#72B9F1' shape='square' hoverTrailAmount={1}/>
           </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-[55%] py-12 lg:py-0 lg:h-[calc(100vh-72px)] flex flex-col justify-center relative pr-0 lg:pr-10">
          <Plus className="absolute top-10 left-0 text-[#25406D]/30 hidden lg:block" size={24} />
          <Plus className="absolute bottom-10 left-0 text-[#25406D]/30 hidden lg:block" size={24} />
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 -rotate-90 text-[#25406D]/20 font-mono text-[10px] tracking-[0.3em] font-bold hidden xl:block">
            SYS.STATUS: ONLINE
          </div>

          <div className="flex flex-col gap-5 md:gap-6 z-20">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#72B9F1] text-[#25406D] font-black font-mono text-xs md:text-sm border-2 border-[#25406D] shadow-[3px_3px_0_0_#25406D]">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse border border-[#25406D]"></div>
              <span className="uppercase tracking-widest">{settings?.hero_status || "I'm Ready For Job"}</span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#25406D] leading-[0.9] tracking-tighter uppercase">
                {firstName}<br />{lastName}
              </h1>
              <div className="inline-block mt-3 px-3 py-1.5 md:px-4 md:py-2 bg-[#25406D] text-[#72B9F1] font-black text-lg md:text-xl uppercase border-2 border-[#72B9F1] shadow-[3px_3px_0_0_#152440]">
                {settings?.hero_role || "BACKEND DEV."}
              </div>
            </div>

            <p className="text-[#25406D]/80 font-mono text-sm md:text-base leading-relaxed max-w-lg font-bold border-l-4 border-[#72B9F1] pl-4 md:pl-6">
              {settings?.hero_desc_id || "FullStack Developer dengan fokus utama Backend Engineering yang adaptif..."}
            </p>

            <div className="flex flex-wrap gap-2 font-mono text-[10px] md:text-xs font-black">
              {['Node.js', 'Laravel', 'FastAPI', 'PostgreSQL', 'GCP', 'Docker'].map((tag) => (
                <span key={tag} className="px-2 py-1 md:px-3 md:py-1.5 bg-white text-[#25406D] border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-[#25406D] text-white font-black text-xs md:text-sm border-2 border-[#25406D] shadow-[4px_4px_0_0_#72B9F1] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-widest">
                Consultation
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#25406D] font-black text-xs md:text-sm border-2 border-[#25406D] shadow-[4px_4px_0_0_#25406D] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
                View Projects
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] h-[450px] sm:h-[500px] lg:h-[calc(100vh-72px)] relative">
          <div className="absolute top-6 right-0 font-mono text-[10px] font-bold text-[#72B9F1] tracking-widest opacity-50 hidden lg:block">
            [ ID_CARD_RENDER : ACTIVE ]
          </div>
          <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
            <Lanyard position={[0, -0.2, 10]} gravity={[0, -40, 0]} fov={30} />
          </div>
        </div>

      </div>
    </section>
  );
}