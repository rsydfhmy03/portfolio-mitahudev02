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
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* 
        Full width navbar: w-full, tanpa max-w, dan border di bagian bawah saja 
        agar menyatu dengan layar tapi tetap brutalism.
      */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#25406D]/90 backdrop-blur-md border-b-4 border-[#72B9F1] shadow-[0_4px_0_0_#152440] pointer-events-auto">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform bg-[#25406D]">
             <svg viewBox="0 0 100 100" className="w-full h-full fill-[#72B9F1]">
               <path d="M 20 50 Q 35 20 50 50 T 80 50" stroke="white" strokeWidth="8" fill="none" />
               <circle cx="50" cy="50" r="12" className="fill-[#72B9F1]" />
             </svg>
          </div>
          <span className="font-black text-2xl tracking-wider text-white uppercase hidden sm:block">Fahmy.</span>
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
        <button className="hidden sm:flex items-center gap-2 px-5 py-2 bg-white text-[#25406D] font-black border-2 border-white hover:bg-[#72B9F1] hover:text-white transition-colors shadow-[4px_4px_0_0_#25406D]">
          <Download className="w-4 h-4" />
          <span>Unduh CV</span>
        </button>

      </nav>
    </header>
  );
}