
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Briefcase, Calculator, Code, Ruler, Brain, Navigation, Mountain, ChevronRight, Plus, MousePointer2 } from 'lucide-react';
import { PageType } from '../App';

interface ServicesProps {
  navigateTo?: (page: PageType, serviceId?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ navigateTo }) => {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const [hasInteracted, setHasInteracted] = useState(false);

  const ICONS: Record<string, any> = {
    'back-office': Briefcase,
    'finance': Calculator,
    'software': Code,
    'engineering': Ruler,
    'ai': Brain
  };

  const handleHover = (id: string) => {
    setActiveId(id);
    setHasInteracted(true);
  };

  return (
    <section id="services" className="pt-24 pb-32 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background Decorative Element - Now Sky Blue Tint */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sky-50/30 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-sky-300"></div>
            <span className="text-sky-500 font-black tracking-[0.5em] uppercase text-[10px]">Strategic Portfolio</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#1E1B4B] tracking-tighter leading-[0.9]">
              Multi-Domain <br/> 
              <span className="font-serif italic font-normal text-gradient">Verticals.</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-xl text-slate-400 font-medium leading-relaxed border-l-2 border-sky-100 pl-8 max-w-lg">
                Engineering specialized units that operate at the intersection of efficiency and Himalayan precision.
              </p>
              
              {/* Exploration Tooltip Badge - Sky Blue Theme */}
              <div className={`flex items-center gap-3 px-5 py-2.5 rounded-full bg-sky-50/50 border border-sky-100 self-start transition-all duration-1000 ${hasInteracted ? 'opacity-40 grayscale scale-95' : 'opacity-100 shadow-sm animate-pulse'}`}>
                <MousePointer2 className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1E1B4B]">Hover to Explore Verticals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Service Quick Switcher - Sky Blue Highlights */}
        <div className="hidden lg:flex items-center gap-1 mb-10 bg-slate-50/50 p-1.5 rounded-full border border-slate-100 w-fit">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.id] || Navigation;
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                onMouseEnter={() => handleHover(s.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${
                  isActive 
                    ? 'bg-white shadow-md text-[#1E1B4B]' 
                    : 'text-slate-400 hover:text-sky-400'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-300'}`} />
                <span className="text-[10px] font-black uppercase tracking-widest">{s.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* The Summit Range: Interactive Vertical Pillars */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] gap-4">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.id] || Navigation;
            const isActive = activeId === service.id;
            
            return (
              <div 
                key={service.id}
                onMouseEnter={() => handleHover(service.id)}
                className={`group relative overflow-hidden rounded-[3rem] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] border border-slate-100 cursor-pointer will-change-[flex] ${
                  isActive 
                    ? 'lg:flex-[12] bg-white shadow-xl shadow-sky-100/20' 
                    : 'lg:flex-[2] bg-slate-50/50 hover:bg-white hover:shadow-lg'
                }`}
              >
                {/* STATUS BAR: Subtle accent - Now Sky Blue to Orange */}
                <div className={`absolute top-0 left-0 h-1.5 transition-all duration-1000 ${
                  isActive ? 'w-full bg-gradient-to-r from-sky-400 to-orange-300' : 'w-0 bg-slate-200'
                }`}></div>

                {/* ICON & NAVIGATION HINT */}
                <div className={`absolute transition-all duration-700 z-20 ${
                  isActive ? 'top-10 left-10' : 'top-10 left-1/2 -translate-x-1/2'
                }`}>
                   <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 ${
                      isActive ? 'bg-[#1E1B4B] text-sky-300 shadow-lg' : 'bg-white text-slate-400 border border-slate-100 group-hover:text-sky-400 group-hover:border-sky-100'
                    }`}>
                      <Icon className="w-5 h-5" />
                      {!isActive && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-sky-400 rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      )}
                    </div>
                </div>

                <div className="flex flex-col h-full p-10 lg:p-16 pt-32 lg:pt-40 relative z-10 overflow-hidden">
                  
                  {/* SERVICE TITLE */}
                  <div className={`
                    pointer-events-none transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isActive 
                      ? 'opacity-100 translate-x-0 rotate-0 relative mb-8' 
                      : 'lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 opacity-100'
                    }
                  `}>
                    <h3 className={`font-black tracking-tight transition-colors duration-500 whitespace-nowrap ${
                      isActive 
                        ? 'text-3xl lg:text-5xl text-[#1E1B4B] leading-tight' 
                        : 'text-lg lg:text-xl uppercase tracking-[0.4em] text-slate-300 group-hover:text-sky-400'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* EXPANDED CONTENT: Revealed on interaction */}
                  <div className={`transition-all duration-500 ease-out ${
                    isActive ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mb-10 border-l-2 border-sky-100 pl-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
                      {service.detailedOfferings.map((item, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-3 py-3 border-b border-slate-50 group/item hover:border-sky-50 transition-all">
                          <Plus className="w-3 h-3 text-sky-300 group-hover/item:text-sky-500 transition-colors" />
                          <span className="text-base font-bold text-[#1E1B4B]/80 tracking-tight group-hover/item:text-[#1E1B4B]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => navigateTo && navigateTo('contact')}
                      className="mt-12 group/btn flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-sky-500 hover:text-[#1E1B4B] transition-colors"
                    >
                      Inquire about this vertical <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* GIANT DECORATIVE INDEX */}
                  <div className={`absolute bottom-8 right-8 font-black text-[12rem] tracking-tighter leading-none select-none transition-all duration-1000 pointer-events-none ${
                    isActive ? 'opacity-[0.03] text-sky-500 translate-y-0 delay-500' : 'opacity-0 translate-y-12'
                  }`}>
                     0{idx + 1}
                  </div>
                </div>

                {/* BACKGROUND MOUNTAIN SILHOUETTE */}
                <div className={`absolute bottom-0 right-0 pointer-events-none transition-all duration-1000 ${
                  isActive ? 'opacity-[0.04] translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <Mountain className="w-[450px] h-[450px] text-[#1E1B4B]" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Responsive Legend */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4 text-slate-300">
            <div className="w-8 h-[1px] bg-slate-100"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Explore our altitude-optimized units</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted By</span>
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+14}`} alt="Client" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-sky-400">+50 Global Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
