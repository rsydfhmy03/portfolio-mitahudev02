'use client';

import Link from 'next/link';
import { 
    // GithubIcon, 
    // LinkedinIcon, 
    MailIcon, 
    GlobeIcon, 
    TerminalIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-4 border-[#72B9F1] bg-[#25406D] text-white mt-20 relative z-20">
      {/* 
        Top Banner: Brutalist Ticker/Banner style
      */}
      <div className="w-full bg-[#72B9F1] text-[#25406D] font-black uppercase text-sm md:text-base py-3 px-4 flex justify-between items-center border-b-4 border-[#152440]">
        <span>System Initialized</span>
        <span className="hidden md:inline-block">Status: Online & Ready</span>
        <span>Version 2.0.26</span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* BRANDING SECTION (Makan 5 kolom) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-white bg-[#0a0f18] flex items-center justify-center shadow-[4px_4px_0_0_#72B9F1]">
              <TerminalIcon className="text-[#72B9F1] w-6 h-6" />
            </div>
            <h2 className="text-4xl font-black tracking-wider uppercase">Fahmy.</h2>
          </div>
          <p className="text-zinc-300 font-mono text-sm leading-relaxed max-w-sm">
            Membangun ekosistem yang persisten. Terbuka untuk diskusi mengenai arsitektur sistem, kolaborasi backend, dan peluang profesional.
          </p>
        </div>

        {/* SOCIAL LINKS (Makan 3 kolom) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h3 className="text-xl font-black uppercase border-b-4 border-[#72B9F1] pb-2 inline-block w-fit">Connect_</h3>
          <div className="flex flex-col gap-3 font-mono font-bold mt-2">
            <a href="https://github.com/rsydfhmy03" target="_blank" rel="noreferrer" className="flex items-center gap-3 w-fit px-4 py-2 bg-[#0a0f18] border-2 border-[#72B9F1] text-[#72B9F1] hover:bg-[#72B9F1] hover:text-[#0a0f18] shadow-[4px_4px_0_0_#0a0f18] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              {/* <GithubIcon size={18} /> GitHub */}
            </a>
            <a href="https://linkedin.com/in/mitahudev03" target="_blank" rel="noreferrer" className="flex items-center gap-3 w-fit px-4 py-2 bg-[#0a0f18] border-2 border-[#72B9F1] text-[#72B9F1] hover:bg-[#72B9F1] hover:text-[#0a0f18] shadow-[4px_4px_0_0_#0a0f18] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              {/* <LinkedinIcon size={18} /> LinkedIn */}
            </a>
            <a href="mailto:fahmyrosyadi29@gmail.com" className="flex items-center gap-3 w-fit px-4 py-2 bg-[#0a0f18] border-2 border-[#72B9F1] text-[#72B9F1] hover:bg-[#72B9F1] hover:text-[#0a0f18] shadow-[4px_4px_0_0_#0a0f18] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <MailIcon size={18} /> Email
            </a>
          </div>
        </div>

        {/* SYSTEM TERMINAL (Makan 4 kolom) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h3 className="text-xl font-black uppercase border-b-4 border-[#72B9F1] pb-2 inline-block w-fit">System Log_</h3>
          <div className="bg-[#0a0f18] border-2 border-white p-4 shadow-[6px_6px_0_0_#72B9F1] font-mono text-xs flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2 mb-2 border-b-2 border-zinc-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p><span className="text-[#72B9F1]">root@fahmy-os</span>:<span className="text-emerald-400">~</span>$ uptime</p>
            <p className="text-zinc-400">up 24/7, 1 user, load average: 0.01, 0.05, 0.00</p>
            <p><span className="text-[#72B9F1]">root@fahmy-os</span>:<span className="text-emerald-400">~</span>$ stack --show</p>
            <p className="text-yellow-400">[&#39;Next.js&#39;, &#39;Tailwind&#39;, &#39;R3F&#39;, &#39;PostgreSQL&#39;]</p>
            <p className="animate-pulse">_</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BOTTOM */}
      <div className="w-full bg-[#0a0f18] border-t-2 border-white py-6 text-center font-mono text-sm text-[#72B9F1] uppercase font-bold">
        <p>FAHMY.OS // © {currentYear} ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}