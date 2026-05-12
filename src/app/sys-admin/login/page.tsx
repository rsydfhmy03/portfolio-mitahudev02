'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, KeyRound, AlertTriangle, ShieldCheck } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

export default function SysAdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();
  
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('⚠ PLEASE FILL IN ALL FIELDS.');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(`⚠ ${error.message.toUpperCase()}`);
      setLoading(false);
    } else {
      // Refresh router untuk memastikan middleware dan server components tahu kita sudah login
      router.refresh();
      router.push('/sys-admin');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative flex flex-col font-sans overflow-hidden">
      
      {/* ── Background Dots Ornamen ── */}
      <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#25406D 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

      {/* ── Floating Decorative Shapes ── */}
      <div className="absolute z-0 pointer-events-none top-[8%] left-[4%] w-[90px] h-[90px] bg-[#FFE566] border-4 border-[#25406D] shadow-[4px_4px_0_0_#25406D] -rotate-12"></div>
      <div className="absolute z-0 pointer-events-none top-[20%] right-[6%] w-[60px] h-[60px] bg-[#72B9F1] border-4 border-[#25406D] shadow-[4px_4px_0_0_#25406D] rounded-full"></div>
      <div className="absolute z-0 pointer-events-none bottom-[18%] left-[7%] w-[70px] h-[70px] bg-red-500 border-4 border-[#25406D] shadow-[4px_4px_0_0_#25406D] rounded-full"></div>
      <div className="absolute z-0 pointer-events-none top-[50%] left-[2%] w-[50px] h-[50px] bg-[#25406D] rotate-12"></div>
      
      {/* ── TOP TAPE marquee ── */}
      <div className="bg-[#25406D] border-b-4 border-[#25406D] overflow-hidden py-2 z-10 relative">
        <div className="animate-[marquee_15s_linear_infinite] whitespace-nowrap inline-flex text-[#72B9F1] font-black font-mono text-sm tracking-[0.2em]">
          <span className="px-8">★ RESTRICTED AREA</span>
          <span className="px-8 text-[#FFE566]">✦ SYS-ADMIN ONLY</span>
          <span className="px-8 text-white">★ UNAUTHORIZED ACCESS PROHIBITED</span>
          <span className="px-8 text-red-500">✦ SECURITY LEVEL: MAXIMUM</span>
          {/* Duplicate for seamless loop */}
          <span className="px-8">★ RESTRICTED AREA</span>
          <span className="px-8 text-[#FFE566]">✦ SYS-ADMIN ONLY</span>
          <span className="px-8 text-white">★ UNAUTHORIZED ACCESS PROHIBITED</span>
          <span className="px-8 text-red-500">✦ SECURITY LEVEL: MAXIMUM</span>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-md animate-[slideUp_0.5s_ease-out_both]">

          {/* ── Top label sticker ── */}
          <div className="flex items-center gap-3 mb-4">
            <div className="border-2 border-[#25406D] shadow-[3px_3px_0_0_#25406D] inline-flex items-center gap-2 bg-[#FFE566] px-3 py-1.5">
              <span className="font-black text-xs tracking-widest text-[#25406D]">MISSION CONTROL</span>
              <KeyRound size={14} className="text-[#25406D]" />
            </div>
            <div className="border-2 border-[#25406D] shadow-[3px_3px_0_0_#25406D] inline-flex items-center bg-[#72B9F1] px-3 py-1.5">
              <span className="font-mono font-black text-[10px] text-[#25406D]">v2.0.26</span>
            </div>
          </div>

          {/* ── Main Card ── */}
          <div className="bg-white border-4 border-[#25406D] shadow-[8px_8px_0_0_#25406D] p-8 relative overflow-hidden transition-all duration-300">
            
            {/* Decorative corner stitching */}
            <div className="absolute -top-1 -right-1 w-10 h-10 bg-[#72B9F1] border-l-4 border-b-4 border-[#25406D] flex items-center justify-center z-10">
              <span className="text-[#25406D] font-black text-lg">★</span>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-end gap-3 mb-2">
                <h1 className="text-5xl font-black text-[#25406D] leading-none tracking-tighter uppercase">
                  IDENTIFY
                </h1>
                <div className="w-3.5 h-3.5 bg-red-500 border-2 border-[#25406D] rounded-full mb-2 animate-pulse"></div>
              </div>
              <p className="font-mono text-xs font-bold text-[#25406D]/60 tracking-wider uppercase">
                Enter admin credentials to proceed_
              </p>
            </div>

            {/* ── FORM ── */}
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              
              {/* Email */}
              <div>
                <label className="flex items-center gap-2 font-black text-sm text-[#25406D] uppercase tracking-widest mb-2">
                  <ShieldCheck size={16} /> Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mitahudev.web.id"
                  className="w-full bg-[#F8FAFC] border-2 border-[#25406D] shadow-[3px_3px_0_0_#25406D] p-3 font-mono text-sm text-[#25406D] outline-none transition-all focus:bg-[#72B9F1]/20 focus:shadow-[5px_5px_0_0_#25406D] focus:-translate-y-0.5 focus:-translate-x-0.5 placeholder:text-[#25406D]/40 font-bold"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="flex items-center gap-2 font-black text-sm text-[#25406D] uppercase tracking-widest mb-2">
                  <KeyRound size={16} /> Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#F8FAFC] border-2 border-[#25406D] shadow-[3px_3px_0_0_#25406D] p-3 pr-12 font-mono text-sm text-[#25406D] outline-none transition-all focus:bg-[#72B9F1]/20 focus:shadow-[5px_5px_0_0_#25406D] focus:-translate-y-0.5 focus:-translate-x-0.5 placeholder:text-[#25406D]/40 font-bold"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#25406D] hover:text-[#72B9F1] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-4 bg-[#72B9F1] text-[#25406D] border-2 border-[#25406D] shadow-[4px_4px_0_0_#25406D] p-4 font-black text-lg tracking-widest uppercase transition-all hover:shadow-[6px_6px_0_0_#25406D] hover:-translate-y-1 hover:-translate-x-1 active:shadow-[2px_2px_0_0_#25406D] active:translate-y-0.5 active:translate-x-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {loading ? (
                  <span className="animate-pulse">AUTHENTICATING...</span>
                ) : (
                  <>AUTHORIZE ACCESS <KeyRound size={20} /></>
                )}
              </button>

              {/* Error message */}
              {errorMsg && (
                <div className="border-2 border-red-500 bg-red-100 shadow-[3px_3px_0_0_#EF4444] p-3 font-mono text-xs font-bold text-red-600 flex items-center gap-2 uppercase animate-[slideUp_0.3s_ease]">
                  <AlertTriangle size={16} className="shrink-0" /> {errorMsg}
                </div>
              )}
            </form>
          </div>

          {/* ── Bottom tag line ── */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D] bg-[#25406D] px-2 py-1">
              <span className="font-mono text-[10px] font-black text-[#72B9F1]">256-BIT ENCRYPTED</span>
            </div>
            <div className="border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D] bg-white px-2 py-1">
              <span className="font-mono text-[10px] font-black text-[#25406D]">RLS PROTECTED</span>
            </div>
          </div>
        </div>
      </main>

      {/* ── CSS Animations for Marquee & Entrance ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 
          from { transform: translateX(0); } 
          to { transform: translateX(-50%); } 
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}