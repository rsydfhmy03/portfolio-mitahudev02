'use client';

import Image from 'next/image';
import { Award, GraduationCap, ExternalLink, Mail, FileText, Briefcase } from 'lucide-react';
import {  SiInstagram } from 'react-icons/si'; // Import icon brand dari SimpleIcons
import Link from 'next/link';

export default function About() {
  const awards = [
    {
      title: "Top 10% Graduate (With Distinction)",
      event: "MSIB Bangkit Academy 2024",
      desc: "Cloud Computing Learning Path. Dipilih dari 57.000+ pendaftar nasional.",
      date: "2024"
    },
    {
      title: "Juara 1 Best Application Category",
      event: "KEMATIF TIF Exhibition 2023 POLIJE",
      desc: "Kategori Intelligent & Embedded Systems.",
      date: "2023"
    },
    {
      title: "Juara 1 National Essay Competition (NEC)",
      event: "UIN Syarif Hidayatullah Jakarta",
      desc: "Kompetisi esai tingkat nasional.",
      date: "2023"
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-24 border-b-8 border-[#25406D] relative overflow-hidden">
      
      {/* Background Ornamen */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#25406D 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-center gap-4 w-full">
          <div className="bg-[#25406D] text-[#72B9F1] px-3 py-1 font-black text-xl md:text-2xl border-2 border-[#25406D] shadow-[3px_3px_0_0_#72B9F1]">
            04
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#25406D] uppercase tracking-tighter whitespace-nowrap">
            About & Honors_
          </h2>
          <div className="flex-1 h-1 bg-[#25406D] min-w-[50px] mt-2"></div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* KOLOM KIRI: EDUCATION */}
          <div className="bg-white border-4 border-[#25406D] shadow-[8px_8px_0_0_#25406D] flex flex-col h-full">
            <div className="relative w-full h-48 sm:h-56 border-b-4 border-[#25406D] bg-[#E2E8F0] overflow-hidden group">
              <Image 
                src="/assets/edu/jti_foto.jpg" 
                alt="Politeknik Negeri Jember" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#25406D]/20 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 shrink-0 bg-[#25406D] text-[#72B9F1] border-2 border-[#72B9F1] flex items-center justify-center shadow-[3px_3px_0_0_#72B9F1]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#25406D] uppercase tracking-tight">
                    State Polytechnic of Jember
                  </h3>
                  <p className="font-mono text-sm font-bold text-[#25406D]/80">
                    Bachelor of Applied Computer Engineering (S.Tr.Kom)
                  </p>
                  <p className="font-mono text-[10px] font-black bg-[#E2E8F0] w-fit px-2 py-0.5 mt-2 border border-[#25406D]">
                    2021 - 2025
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-8 border-y-2 border-dashed border-[#25406D]/30 py-4">
                <div className="flex flex-col items-center justify-center border-r-2 border-dashed border-[#25406D]/30">
                  <span className="text-[#25406D] font-mono text-[10px] font-bold uppercase tracking-widest">GPA</span>
                  <span className="text-2xl font-black text-[#25406D]">3.87<span className="text-sm">/4.00</span></span>
                </div>
                <div className="flex flex-col items-center justify-center border-r-2 border-dashed border-[#25406D]/30">
                  <span className="text-[#25406D] font-mono text-[10px] font-bold uppercase tracking-widest">SKS</span>
                  <span className="text-2xl font-black text-[#25406D]">144</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[#25406D] font-mono text-[10px] font-bold uppercase tracking-widest">Predicate</span>
                  <span className="text-sm font-black text-[#72B9F1] bg-[#25406D] px-2 py-1 uppercase border border-[#72B9F1] mt-1 shadow-[2px_2px_0_0_#72B9F1]">Cumlaude</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <div className="bg-[#E2E8F0] p-4 border-2 border-[#25406D] shadow-[4px_4px_0_0_#25406D] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#25406D] font-black text-xs uppercase tracking-widest">
                    <FileText size={14} /> Undergraduate Thesis
                  </div>
                  <p className="text-[#25406D]/90 font-mono text-xs font-bold leading-relaxed">
                    Sistem Deteksi Gambar Wajah Hasil AI Generated Pada Konten Media Sosial Menggunakan Deep Learning.
                  </p>
                  <Link href="#" className="w-fit mt-1 flex items-center gap-1.5 text-[10px] font-black text-white bg-[#25406D] px-2 py-1 uppercase hover:bg-[#72B9F1] hover:text-[#25406D] transition-colors border border-[#25406D]">
                    <ExternalLink size={10} /> SIPORA Link
                  </Link>
                </div>

                <div className="bg-[#E2E8F0] p-4 border-2 border-[#25406D] shadow-[4px_4px_0_0_#25406D] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#25406D] font-black text-xs uppercase tracking-widest">
                    <Briefcase size={14} /> Internship Program
                  </div>
                  <p className="text-[#25406D]/90 font-mono text-xs font-bold leading-relaxed">
                    Perancangan dan Pengembangan Sisi Backend Platform Kursus Bahasa Jepang PIS Japan Career Menggunakan AdonisJS.
                  </p>
                  <Link href="#" className="w-fit mt-1 flex items-center gap-1.5 text-[10px] font-black text-white bg-[#25406D] px-2 py-1 uppercase hover:bg-[#72B9F1] hover:text-[#25406D] transition-colors border border-[#25406D]">
                    <ExternalLink size={10} /> SIPORA Link
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* KOLOM KANAN: AWARDS & CTA */}
          <div className="flex flex-col gap-8">
            
            <div className="bg-[#25406D] border-4 border-[#25406D] shadow-[8px_8px_0_0_#72B9F1] p-6 md:p-8 flex-grow">
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-[#72B9F1]" size={28} />
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                  Honors & Awards_
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                {awards.map((award, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-[#72B9F1]/30 pb-2">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[#72B9F1] border border-[#25406D]"></div>
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <h4 className="text-lg font-black text-[#72B9F1] leading-tight">
                        {award.title}
                      </h4>
                      <span className="font-mono text-[10px] font-black text-white bg-white/10 px-2 py-0.5 border border-white/20 shrink-0">
                        {award.date}
                      </span>
                    </div>
                    <p className="font-mono text-sm font-bold text-white mb-1">
                      {award.event}
                    </p>
                    <p className="font-mono text-xs text-white/70 leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA / Connect Block */}
            <div className="bg-[#72B9F1] border-4 border-[#25406D] shadow-[8px_8px_0_0_#25406D] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <h3 className="text-3xl font-black text-[#25406D] uppercase tracking-tighter mb-2">
                Ready to Work Together?
              </h3>
              <p className="font-mono text-sm font-bold text-[#25406D]/80 mb-6 max-w-sm">
                Let&apos;s connect, collaborate, and build something extraordinary for your next big mission.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:fahmyrosyadi29@gmail.com" className="w-12 h-12 bg-white border-2 border-[#25406D] flex items-center justify-center text-[#25406D] shadow-[4px_4px_0_0_#25406D] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-[#25406D] hover:text-white transition-all">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mitahudev03/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-[#25406D] flex items-center justify-center text-[#25406D] shadow-[4px_4px_0_0_#25406D] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-[#25406D] hover:text-white transition-all">
                  {/* SVG Manual LinkedIn */}
                  <svg width="20" height="20" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/mitahudev.03" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-[#25406D] flex items-center justify-center text-[#25406D] shadow-[4px_4px_0_0_#25406D] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-[#25406D] hover:text-white transition-all">
                  <SiInstagram size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}