'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Mission Logs', path: '/mission-logs' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 pointer-events-none">
      {/* 
        Full width dengan konten di tengah. 
        pointer-events-auto agar yang bisa diklik cuma kotaknya, 
        pinggirannya tetap tembus pandang ke hero section.
      */}
      <nav className="mx-auto max-w-5xl w-full flex items-center justify-between p-3 bg-[#25406D]/80 backdrop-blur-md border-2 border-[#72B9F1] shadow-[4px_4px_0_0_#72B9F1] pointer-events-auto">
        
        {/* LOGO SECTION: Interlocking Waves & Circular Flow */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform bg-[#25406D]">
             {/* Simple Abstract SVG representing your philosophy */}
             <svg viewBox="0 0 100 100" className="w-full h-full fill-[#72B9F1]">
               <path d="M 20 50 Q 35 20 50 50 T 80 50" stroke="white" strokeWidth="8" fill="none" />
               <circle cx="50" cy="50" r="12" className="fill-[#72B9F1]" />
             </svg>
          </div>
          <span className="font-bold text-xl tracking-wider text-white uppercase hidden sm:block">Fahmy.</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <ul className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-bold transition-colors z-10 block",
                    isActive ? "text-[#25406D]" : "text-zinc-300 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-bg"
                      className="absolute inset-0 bg-[#72B9F1] -z-10 border-2 border-white shadow-[2px_2px_0_0_#fff]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DOWNLOAD CV BUTTON */}
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-[#25406D] font-bold border-2 border-white hover:bg-[#72B9F1] hover:text-white transition-colors shadow-[2px_2px_0_0_#25406D]">
          <Download className="w-4 h-4" />
          <span>Unduh CV</span>
        </button>

      </nav>
    </header>
  );
}