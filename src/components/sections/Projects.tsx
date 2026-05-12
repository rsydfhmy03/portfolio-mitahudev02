// src/components/sections/Projects.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight, Smartphone, Globe } from 'lucide-react';
import { SiGithub } from 'react-icons/si'; // Menggunakan SiGithub yang akurat
import Link from 'next/link';

// =======================================================================
// INTERFACES (Strict Typing)
// =======================================================================
interface ProjectMedia {
  url: string;
  caption: string;
}

interface Project {
  id: string;
  title: string;
  categories: string[];
  association: string;
  date: string;
  shortDesc: string;
  highlights: string[];
  techStack: string[];
  media: ProjectMedia[];
  githubLink: string;
  demoLink: string;
  platform: 'mobile' | 'web'; // Literal type untuk keamanan ekstra
}

// =======================================================================
// CMS PREPARATION DATA
// =======================================================================
const projectsData: Project[] = [
  {
    id: 'proj_gansdoctor',
    title: 'GansDoctor App',
    categories: ['Mobile', 'AI/ML', 'Backend', 'Cloud'],
    association: 'Politeknik Negeri Jember (Undergraduate Thesis)',
    date: 'Aug 2024 - Jun 2025',
    shortDesc: 'AI-Generated Face Detection System to combat deepfakes.',
    highlights: [
      'Model Development: CNN VGG-16 dengan akurasi 99.52% membedakan wajah asli vs AI.',
      'Backend & DevOps: RESTful API (Python/FastAPI) CI/CD ke GCP Cloud Run.',
      'Mobile App: Aplikasi Android real-time dengan Flutter.'
    ],
    techStack: ['Python', 'FastAPI', 'TensorFlow', 'Flutter', 'GCP', 'Docker'],
    media: [
      { url: 'https://dummyimage.com/800x500/25406d/72b9f1&text=GansDoctor+UI', caption: 'GansDoctor UI' },
      { url: 'https://dummyimage.com/800x500/72b9f1/25406d&text=GCP+Architecture', caption: 'GCP Architecture' },
      { url: 'https://dummyimage.com/800x500/e2e8f0/25406d&text=Testing+System', caption: 'Testing System' }
    ],
    githubLink: 'https://github.com/rsydfhmy03/App-GANSDOCTOR.git',
    demoLink: 'https://play.google.com/store/apps/details?id=com.mitahudev.gansdoctor',
    platform: 'mobile'
  },
  {
    id: 'proj_eventgrid',
    title: 'EventGrid SaaS',
    categories: ['Web', 'Backend', 'Microservices'],
    association: 'Personal Project & Research',
    date: 'Jan 2026 - Mar 2026',
    shortDesc: 'Platform manajemen event skala besar dengan arsitektur microservices.',
    highlights: [
      'System Design: Arsitektur terdistribusi menggunakan Next.js dan Node.js.',
      'Database: Implementasi skema dinamis PostgreSQL (JSONB).',
      'Performance: Caching layer menggunakan Redis untuk response time <50ms.'
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind'],
    media: [
      { url: 'https://dummyimage.com/800x500/25406d/72b9f1&text=Dashboard+EventGrid', caption: 'Dashboard UI' },
      { url: 'https://dummyimage.com/800x500/72b9f1/25406d&text=Database+Schema', caption: 'ERD Schema' }
    ],
    githubLink: 'https://github.com/rsydfhmy03',
    demoLink: '#',
    platform: 'web'
  }
];

// =======================================================================
// SUB-COMPONENT: PROJECT CARD
// =======================================================================
const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [activeImg, setActiveImg] = useState(0);
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 w-full`}>
      
      {/* KOLOM IMAGE BROWSER GALLERY */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Main Image Browser Window */}
        <div className="w-full bg-white border-4 border-[#25406D] shadow-[8px_8px_0_0_#25406D] overflow-hidden flex flex-col group">
          <div className="bg-[#25406D] px-3 py-2 flex items-center justify-between border-b-4 border-[#25406D]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 border border-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 border border-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white/20"></div>
            </div>
            <div className="font-mono text-[10px] text-[#72B9F1] uppercase tracking-widest font-black">
              {project.media[activeImg].caption}
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] bg-[#E2E8F0] overflow-hidden">
            <Image 
              src={project.media[activeImg].url}
              alt={project.media[activeImg].caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Thumbnails Gallery */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {project.media.map((img: ProjectMedia, i: number) => (
            <button 
              key={i}
              onClick={() => setActiveImg(i)}
              className={`relative shrink-0 w-24 h-16 border-2 transition-all ${
                activeImg === i 
                  ? 'border-[#25406D] shadow-[3px_3px_0_0_#72B9F1] opacity-100' 
                  : 'border-[#25406D]/30 opacity-60 hover:opacity-100 hover:border-[#25406D]'
              }`}
            >
              <Image src={img.url} alt={img.caption} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* KOLOM INFORMASI PROYEK */}
      <div className="w-full lg:w-1/2 flex flex-col">
        
        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((cat: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-[#25406D] text-[#72B9F1] text-[10px] font-black font-mono uppercase border border-[#25406D]">
              {cat}
            </span>
          ))}
        </div>

        {/* Title & Icon */}
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-4xl md:text-5xl font-black text-[#25406D] uppercase tracking-tighter leading-none">
            {project.title}
          </h3>
          <div className="w-10 h-10 shrink-0 bg-[#72B9F1] border-2 border-[#25406D] flex items-center justify-center text-[#25406D] shadow-[3px_3px_0_0_#25406D]">
            {project.platform === 'mobile' ? <Smartphone size={20} /> : <Globe size={20} />}
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-col gap-1 mb-6 border-l-4 border-[#72B9F1] pl-3 py-1">
          <p className="font-mono text-xs font-bold text-[#25406D] uppercase">{project.association}</p>
          <p className="font-mono text-[10px] font-bold text-[#25406D]/60 uppercase">{project.date}</p>
        </div>

        {/* Short Description */}
        <p className="text-[#25406D]/90 font-bold text-sm md:text-base leading-relaxed mb-6">
          {project.shortDesc}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 font-mono text-xs text-[#25406D]/80 font-bold mb-6">
          {project.highlights.map((hl: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="shrink-0 mt-1 text-[#72B9F1]">▹</span>
              <span>{hl}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-white text-[#25406D] border border-[#25406D] text-[10px] font-black uppercase shadow-[2px_2px_0_0_#25406D]">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          <Link href={`/projects/${project.id}`} className="px-6 py-3 bg-[#25406D] text-white font-black text-xs md:text-sm border-2 border-[#25406D] shadow-[4px_4px_0_0_#72B9F1] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center gap-2">
            View Detail <ArrowRight size={16} />
          </Link>
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-4 py-3 bg-white text-[#25406D] font-black text-xs md:text-sm border-2 border-[#25406D] shadow-[4px_4px_0_0_#25406D] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
            <SiGithub size={16} /> <span className="hidden sm:inline">Repo</span>
          </a>
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="px-4 py-3 bg-[#72B9F1] text-[#25406D] font-black text-xs md:text-sm border-2 border-[#25406D] shadow-[4px_4px_0_0_#25406D] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
            <ExternalLink size={18} /> <span className="hidden sm:inline">Live</span>
          </a>
        </div>

      </div>
    </div>
  );
};

// =======================================================================
// MAIN SECTION
// =======================================================================
export default function Projects() {
  return (
    <section className="w-full bg-[#E2E8F0] py-24 border-b-8 border-[#25406D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-20 flex items-center gap-4 w-full">
          <div className="bg-[#25406D] text-[#72B9F1] px-3 py-1 font-black text-xl md:text-2xl border-2 border-[#25406D] shadow-[3px_3px_0_0_#72B9F1]">
            03
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#25406D] uppercase tracking-tighter whitespace-nowrap">
            Featured projects_
          </h2>
          <div className="flex-1 h-1 bg-[#25406D] min-w-[50px] mt-2"></div>
        </div>

        {/* PROJECTS LIST */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}