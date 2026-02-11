
import React, { useEffect, useRef, useState } from 'react';
import { FOUNDERS } from '../constants';
import { Sparkles, ArrowRight } from 'lucide-react';

const Founders: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="founders" className="py-24 px-6 bg-transparent relative overflow-hidden">
      {/* Decorative background elements - Orchid tint */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-purple-50/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-purple-200"></div>
            <span className="text-purple-400 font-black tracking-[0.4em] uppercase text-[10px]">The Visionaries</span>
            <div className="w-12 h-[1px] bg-purple-200"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-[#1E1B4B] tracking-tight leading-none">
            Meet Our <span className="font-serif italic font-normal text-gradient">Founders</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {FOUNDERS.map((founder, idx) => (
            <div 
              key={founder.name} 
              className={`flex flex-col md:flex-row gap-12 items-center md:items-start group transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-elegant border-8 border-white transition-all duration-1000 group-hover:rotate-1 group-hover:scale-[1.02]">
                  <img 
                    src={founder.image} 
                    className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" 
                    alt={founder.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent"></div>
                </div>
                <div className={`absolute -bottom-6 -right-6 px-6 py-6 rounded-3xl shadow-xl flex items-center justify-center border border-white/50 backdrop-blur-md ${
                  idx === 0 ? 'bg-purple-600 text-white' : 'bg-orange-500 text-white'
                }`}>
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 block ${
                  idx === 0 ? 'text-purple-400' : 'text-orange-400'
                }`}>
                  {founder.role}
                </span>
                <h3 className="text-4xl font-black text-[#1E1B4B] mb-6 leading-tight">
                  {founder.name}
                </h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8 italic">
                  "{founder.bio}"
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-[#1E1B4B] uppercase tracking-widest border-b border-purple-100 pb-2 inline-block">Strategic Strengths</h4>
                  <ul className="space-y-3">
                    {founder.strengths.map((strength) => (
                      <li key={strength} className="flex items-center gap-3 group/item">
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/item:scale-150 ${
                          idx === 0 ? 'bg-purple-300 group-hover/item:bg-purple-600' : 'bg-orange-300 group-hover/item:bg-orange-500'
                        }`}></div>
                        <span className="font-bold text-slate-700 text-base">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
