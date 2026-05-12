import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { getSiteSettings } from '@/services/siteSettings';

export default async function Footer() {
  // Panggil service dari backend Supabase
  const settings = await getSiteSettings();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0f18] text-white border-t-8 border-[#25406D] relative z-20 overflow-hidden">
      
      <div className="w-full bg-[#72B9F1] text-[#25406D] font-black uppercase text-[10px] sm:text-xs md:text-sm py-2.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b-4 border-[#25406D]">
        <span>System Initialized</span>
        <span className="hidden md:inline-block">Status: Online & Ready</span>
        <span>Version 2.0.26</span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12">
        
        {/* KOLOM 1: BRANDING */}
        <div className="lg:col-span-5 p-8 lg:p-12 lg:border-r-4 border-b-4 lg:border-b-0 border-[#25406D] flex flex-col gap-6 relative">
          <div className="absolute top-10 right-10 opacity-5">
            <Image src="/assets/logo/Logo_mitahudev.png" width={150} height={150} alt="Watermark" />
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <div className="w-12 h-12 border-2 border-[#72B9F1] bg-white overflow-hidden p-1 shadow-[4px_4px_0_0_#72B9F1]">
              <Image 
                src="/assets/logo/Logo_mitahudev.png" 
                alt="Mitahudev Logo" 
                width={48} 
                height={48} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Dinamis Title Web */}
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase text-[#72B9F1] bg-[#25406D] px-3 py-1 border-2 border-[#72B9F1] shadow-[4px_4px_0_0_#72B9F1]">
              &gt;_ {settings?.site_title || "MITAHUDEV."}
            </h2>
          </div>

          {/* Dinamis Footer Description */}
          <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md relative z-10 font-bold mt-2">
            {settings?.footer_desc_id || "Membangun ekosistem yang persisten. Terbuka untuk diskusi mengenai arsitektur sistem, kolaborasi backend, dan peluang profesional."}
          </p>

          <div className="inline-flex items-center gap-3 px-4 py-3 bg-[#152440] border-2 border-[#25406D] w-fit mt-auto shadow-[4px_4px_0_0_#152440]">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse border border-[#0a0f18]"></div>
            <span className="font-mono text-[10px] font-black text-[#72B9F1] uppercase tracking-widest">
              Online & Ready • V 2.0
            </span>
          </div>
        </div>

        {/* KOLOM 2: NAVIGATE */}
        <div className="lg:col-span-3 p-8 lg:p-12 lg:border-r-4 border-b-4 lg:border-b-0 border-[#25406D] flex flex-col gap-6">
          <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2 opacity-50">
            Navigate_
          </h3>
          <ul className="flex flex-col gap-5 font-mono text-sm font-bold text-zinc-300">
            {[
              { name: 'Home', path: '/' },
              { name: 'Projects', path: '/projects' },
              { name: 'Mission Logs', path: '/mission-logs' },
              { name: 'Download CV', path: '#' },
              { name: 'Download Portfolio', path: '#' }
            ].map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="flex items-center gap-3 hover:text-[#72B9F1] group transition-all w-fit">
                  <span className="text-[#25406D] group-hover:text-[#72B9F1] transition-colors">-&gt;</span> 
                  <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM 3: CONNECT */}
        <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col gap-6">
          <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2 opacity-50">
            Connect_
          </h3>
          <div className="flex flex-col gap-4 font-mono text-xs font-bold">
            
            {/* Dinamis Github URL */}
            <a href={settings?.social_github || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 border-2 border-[#25406D] hover:border-[#72B9F1] bg-[#152440] hover:bg-[#25406D] transition-all group shadow-[4px_4px_0_0_#0a0f18] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="bg-[#0a0f18] p-2 border border-[#25406D] group-hover:border-[#72B9F1] text-[#72B9F1]">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                {settings?.social_github?.replace('https://', '') || "github.com/mitahudev"}
              </span>
            </a>

            {/* Dinamis LinkedIn URL */}
            <a href={settings?.social_linkedin || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 border-2 border-[#25406D] hover:border-[#72B9F1] bg-[#152440] hover:bg-[#25406D] transition-all group shadow-[4px_4px_0_0_#0a0f18] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="bg-[#0a0f18] p-2 border border-[#25406D] group-hover:border-[#72B9F1] text-[#72B9F1]">
                <svg width="20" height="20" aria-hidden="true" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </div>
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                {settings?.social_linkedin?.replace('https://', '').replace('www.', '') || "linkedin.com/in/mitahudev03"}
              </span>
            </a>

            {/* Dinamis Email */}
            <a href={`mailto:${settings?.social_email || "fahmyrosyadi29@gmail.com"}`} className="flex items-center gap-4 p-3 border-2 border-[#25406D] hover:border-[#72B9F1] bg-[#152440] hover:bg-[#25406D] transition-all group shadow-[4px_4px_0_0_#0a0f18] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="bg-[#0a0f18] p-2 border border-[#25406D] group-hover:border-[#72B9F1] text-[#72B9F1]">
                <Mail width="20" height="20" />
              </div>
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                {settings?.social_email || "fahmyrosyadi29@gmail.com"}
              </span>
            </a>

          </div>
        </div>

      </div>

      <div className="w-full border-t-4 border-[#25406D] bg-[#05080c] py-6 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] sm:text-xs font-bold text-zinc-500 uppercase">
        <p className="text-center md:text-left">{settings?.site_title || "MITAHUDEV."}PORTFOLIO // © {currentYear} ALL RIGHTS RESERVED.</p>
        <p className="text-center md:text-right flex items-center gap-2">
          BUILT WITH <span className="text-red-500">♥</span> • NEO-BRUTALISM V1.0
        </p>
      </div>

    </footer>
  );
}