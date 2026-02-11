
import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageType } from '../App';
import { HERO_CONTENT } from '../constants';

interface HeroProps {
  navigateTo?: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setRevealed(true), 100);

    const handleScroll = () => {
      const progress = window.scrollY / (window.innerHeight || 1);
      setScrollProgress(Math.min(progress, 1.2));
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) - 0.5, 
        y: (e.clientY / window.innerHeight) - 0.5 
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const alpenglowOpacity = (revealed ? 0.3 : 0) + (scrollProgress * 0.3);

  return (
    <section aria-label="Hero Section" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-sky-400' : 'bg-rose-300'} opacity-20 blur-[1px] transition-all duration-[3000ms] ${revealed ? 'opacity-20 scale-100' : 'opacity-0 scale-0'}`}
            style={{
              top: `${15 + i * 12}%`,
              left: `${15 + (i * 23) % 70}%`,
              animation: `float ${8 + i * 2}s infinite alternate ease-in-out`,
              transform: `translate(${mousePos.x * (30 + i * 12)}px, ${mousePos.y * (30 + i * 12)}px)`,
              transitionDelay: `${i * 150}ms`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none origin-bottom select-none">
        <svg viewBox="0 0 1440 900" className="w-full h-full object-cover" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <defs>
            <linearGradient id="alpenglow-dynamic" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity={alpenglowOpacity} />
              <stop offset="50%" stopColor="#FB7185" stopOpacity={alpenglowOpacity * 0.8} />
              <stop offset="100%" stopColor="#FDBA74" stopOpacity={alpenglowOpacity} />
            </linearGradient>

            <linearGradient id="mist-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>

          <g style={{ 
            opacity: revealed ? 1 : 0,
            transform: `translateY(${revealed ? scrollProgress * 180 : 150}px) translateX(${mousePos.x * 8}px)`,
            transition: 'transform 2.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 2.5s ease-out',
          }}>
            <path 
              d="M-100,900 L-100,400 L150,380 L350,220 L450,250 L600,120 L750,230 L900,100 L1100,280 L1300,180 L1540,350 L1540,900 Z" 
              fill="#F0F9FF" 
              fillOpacity="0.5"
              filter="url(#watercolor-filter)"
            />
          </g>

          <g style={{ 
            opacity: revealed ? 1 : 0,
            transform: `translateY(${revealed ? scrollProgress * 90 : 100}px) translateX(${mousePos.x * -15}px)`,
            transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 2s ease-out 0.3s',
          }}>
            <path 
              d="M-100,900 L-100,600 L250,550 L450,680 L600,400 L680,240 L760,400 L950,650 L1200,520 L1540,650 L1540,900 Z" 
              fill="#0EA5E9" 
              fillOpacity="0.04"
              filter="url(#watercolor-filter)"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col items-start pt-20 lg:pt-0">
        <header className="w-full">
          <div className={`mb-8 lg:mb-12 flex items-center gap-4 lg:gap-6 transition-all duration-[2000ms] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
             <div className="w-12 lg:w-16 h-[1px] bg-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.3)]"></div>
             <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] lg:tracking-[0.7em] text-sky-400">{HERO_CONTENT.badgeText}</span>
          </div>

          <h1 className="text-[clamp(2.5rem,10.5vw,9.5rem)] leading-[0.9] lg:leading-[0.82] tracking-tighter text-[#1E1B4B] font-light mb-12 lg:mb-20">
            <span className={`block transition-all duration-[1500ms] delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              {HERO_CONTENT.titlePart1} <span className="font-serif italic font-bold text-gradient">{HERO_CONTENT.titleItalic}</span>
            </span>
            <span className={`block transition-all duration-[1500ms] delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <span className="font-black">{HERO_CONTENT.titlePart2}</span>
            </span>
          </h1>

          <div className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:items-center transition-all duration-[1500ms] delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-lg lg:text-2xl font-medium text-slate-400 max-w-lg leading-snug">
              {HERO_CONTENT.subtitle.split('bespoke elegance')[0]} <span className="text-sky-400 font-bold">bespoke elegance</span> {HERO_CONTENT.subtitle.split('bespoke elegance')[1]}
            </p>
            
            <button 
              onClick={() => navigateTo && navigateTo('ascent')} 
              aria-label={HERO_CONTENT.ctaText}
              className="group relative px-10 lg:px-16 py-6 lg:py-8 bg-[#1E1B4B] text-white rounded-full font-black uppercase tracking-widest text-[9px] lg:text-[11px] overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-4">
                {HERO_CONTENT.ctaText} <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-45 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-rose-400 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </header>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-50"></div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(-40px) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
