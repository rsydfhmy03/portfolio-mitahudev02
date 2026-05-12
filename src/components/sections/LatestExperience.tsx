'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Briefcase, MapPin, Calendar } from 'lucide-react';

const experienceData = {
  id: "exp-01",
  role: "Backend Developer",
  type: "Maganghub Kemnaker",
  company: "PT Link Apisindo Media (Profile Image Studio)",
  location: "Kab. Malang",
  period: "Oktober 2025 – April 2026",
  images: [
    "https://dummyimage.com/800x500/25406d/72b9f1&text=System+Architecture",
    "https://dummyimage.com/800x500/72b9f1/25406d&text=Database+Schema+JSONB",
    "https://dummyimage.com/800x500/e2e8f0/25406d&text=API+Monitoring+Dashboard"
  ],
  responsibilities: [
    "Mengeksekusi migrasi backend dari AdonisJS ke Next.js API Routes pada platform ICCN V2, termasuk optimasi skema PostgreSQL menggunakan tipe data JSONB untuk menangani struktur formulir dinamis.",
    "Membangun API Bridge yang menyinkronkan profil pengguna dan parameter prediksi dari chatbot (FastAPI) ke sistem Keycloak SSO maupun OAuth 2.0.",
    "Mengurangi beban server hingga 40% dan mencegah timeout pada jam sibuk dengan mengimplementasikan asynchronous queues menggunakan Redis.",
    "Menyelesaikan masalah kritis redirect loop dan realm mismatch pada implementasi OAuth 2.0 dengan melakukan intersepsi kustom pada token exchange.",
    "Mengintegrasikan Langflow dan Langwatch untuk memantau jejak (trace) data AI, memastikan interaksi chatbot terekam untuk audit.",
    "Mengembangkan fitur ekspor data kompleks ke format Excel dengan dukungan dynamic rowspanning dan mengelola penyimpanan berkas di AWS S3."
  ],
  techStack: ["Next.js", "Redis", "PostgreSQL", "FastAPI", "Keycloak", "AWS S3", "Langflow"]
};

export default function LatestExperience() {
  const [currentImg, setCurrentImg] = useState(0);

  // Fungsi navigasi Carousel
  const nextImg = () => {
    setCurrentImg((prev) => (prev === experienceData.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? experienceData.images.length - 1 : prev - 1));
  };

  return (
    // Background sedikit lebih terang (#F8FAFC) dari section sebelumnya (#E2E8F0) untuk memberi efek "Banding" / Layering
    <section className="w-full bg-[#F8FAFC] py-24 border-b-8 border-[#25406D] relative overflow-hidden">
      
      {/* Ornamen Background Teks Besar */}
      <div className="absolute top-40 -right-20 text-[#25406D]/5 font-mono text-9xl font-black rotate-90 select-none pointer-events-none hidden lg:block">
        EXPERIENCE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================
            SECTION HEADER (Konsisten dengan Core Stack)
        ========================================= */}
        <div className="mb-16 flex items-center gap-4 w-full">
          <div className="bg-[#25406D] text-[#72B9F1] px-3 py-1 font-black text-xl md:text-2xl border-2 border-[#25406D] shadow-[3px_3px_0_0_#72B9F1]">
            02
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#25406D] uppercase tracking-tighter whitespace-nowrap">
            Latest Experience_
          </h2>
          <div className="flex-1 h-1 bg-[#25406D] min-w-[50px] mt-2"></div>
        </div>

        {/* =========================================
            CARD LAYOUT (Image Carousel + Info)
        ========================================= */}
        <div className="bg-white border-4 border-[#25406D] shadow-[12px_12px_0_0_#25406D] flex flex-col xl:flex-row w-full overflow-hidden">
          
          {/* KIRI: IMAGE CAROUSEL */}
          <div className="w-full xl:w-2/5 border-b-4 xl:border-b-0 xl:border-r-4 border-[#25406D] bg-[#E2E8F0] relative group">
            
            {/* Indikator Angka */}
            <div className="absolute top-4 left-4 z-20 bg-[#25406D] text-white px-3 py-1 font-mono text-sm font-black border-2 border-white shadow-[2px_2px_0_0_#152440]">
              [ {currentImg + 1} / {experienceData.images.length} ]
            </div>

            {/* Area Gambar */}
            <div className="relative w-full aspect-video xl:aspect-auto xl:h-full overflow-hidden">
              <Image 
                src={experienceData.images[currentImg]} 
                alt="Experience Preview" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Tombol Navigasi Carousel */}
            <button 
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-[#25406D] flex items-center justify-center text-[#25406D] hover:bg-[#72B9F1] hover:text-[#25406D] shadow-[4px_4px_0_0_#25406D] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-[#25406D] flex items-center justify-center text-[#25406D] hover:bg-[#72B9F1] hover:text-[#25406D] shadow-[4px_4px_0_0_#25406D] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="w-full xl:w-3/5 p-6 md:p-8 flex flex-col">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-4 border-[#25406D] pb-6 mb-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-[#25406D] uppercase tracking-tighter mb-2">
                  {experienceData.role}
                </h3>
                <div className="flex items-center gap-2 text-[#25406D] font-bold font-mono text-sm bg-[#72B9F1] w-fit px-3 py-1 border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">
                  <Briefcase size={14} />
                  <span>{experienceData.company}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs font-bold text-[#25406D]/80">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#72B9F1]" />
                  <span className="uppercase">{experienceData.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#72B9F1]" />
                  <span className="uppercase">{experienceData.location}</span>
                </div>
                <div className="inline-block border border-[#25406D] px-2 py-0.5 mt-1 text-center bg-[#E2E8F0]">
                  {experienceData.type}
                </div>
              </div>
            </div>

            <ul className="flex-grow flex flex-col gap-4 font-mono text-sm text-[#25406D]/90 font-bold mb-8">
              {experienceData.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-3 h-3 bg-[#72B9F1] border-[1.5px] border-[#25406D] block"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack yang Digunakan */}
            <div className="mt-auto">
              <div className="text-[10px] font-black text-[#25406D]/50 uppercase tracking-[0.2em] mb-3">
                Teknologi yang diimplementasikan:
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-[10px] font-black uppercase">
                {experienceData.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white text-[#25406D] border-2 border-[#25406D] shadow-[2px_2px_0_0_#25406D]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}