'use client';

import { useState } from 'react'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Download, Menu, X } from 'lucide-react'; 
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Mission Logs', path: '/mission-logs' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
      <nav className="w-full bg-[#25406D] border-b-4 border-[#72B9F1] pointer-events-auto relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[72px]">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 border-2 border-white rounded-full overflow-hidden bg-white group-hover:scale-105 transition-transform">
               <Image 
                 src="/assets/logo/Logo_mitahudev.png" 
                 alt="Logo" 
                 width={40} 
                 height={40} 
                 className="w-full h-full object-cover"
               />
            </div>
            <span className="font-black text-xl md:text-2xl tracking-tighter text-white uppercase italic">Mitahudev.</span>
          </Link>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={cn(
                      "relative px-4 py-2 text-sm font-bold transition-colors z-10 block uppercase tracking-widest",
                      isActive ? "text-[#25406D]" : "text-zinc-300 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-bg"
                        className="absolute inset-0 bg-[#72B9F1] -z-10 border-2 border-white shadow-[3px_3px_0_0_#fff]"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP BUTTON (Hidden on Mobile) */}
          <button className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-[#25406D] font-black border-2 border-white hover:bg-[#72B9F1] transition-all shadow-[4px_4px_0_0_#152440] active:shadow-none active:translate-x-1 active:translate-y-1">
            <Download size={16} />
            <span className="text-xs uppercase">Resume</span>
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            className="md:hidden text-white hover:text-[#72B9F1] p-2 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {/* Logic: Jika isOpen true, tampilkan silang (X), jika false tampilkan Hamburger */}
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE DROPDOWN MENU (Animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden absolute top-[72px] left-0 w-full bg-[#25406D] border-b-4 border-[#72B9F1] overflow-hidden shadow-[0_8px_0_0_rgba(10,15,24,0.5)] z-50"
            >
              <ul className="flex flex-col px-4 py-4 gap-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)} 
                        className={cn(
                          "block px-4 py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all",
                          isActive 
                            ? "bg-[#72B9F1] text-[#25406D] border-white shadow-[3px_3px_0_0_#fff]" 
                            : "bg-transparent text-zinc-300 border-transparent hover:border-[#72B9F1] hover:text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-4 pb-2">
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#25406D] font-black border-2 border-white shadow-[4px_4px_0_0_#152440] active:shadow-none active:translate-x-1 active:translate-y-1">
                    <Download size={18} />
                    <span className="text-sm uppercase">Unduh Resume</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}