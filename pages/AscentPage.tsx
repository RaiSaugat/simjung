
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PageType } from '../App';
import { ASCENT_PROCESS } from '../constants';

const AscentPage: React.FC<{ navigateTo: (p: PageType) => void }> = ({ navigateTo }) => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Page Header */}
      <section className="pt-32 lg:pt-48 pb-12 lg:pb-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 mb-8 text-[9px] font-black uppercase tracking-widest text-slate-400">
            <button onClick={() => navigateTo('home')} className="hover:text-orchid transition-colors">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1E1B4B]">Our Ascent</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-orchid font-black tracking-[0.4em] lg:tracking-[0.6em] uppercase text-[9px] lg:text-[10px] mb-4 lg:mb-6 block">Strategic Onboarding</span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#1E1B4B] tracking-tighter leading-[0.95] lg:leading-[0.85]">
                The Path <br/>
                To <span className="font-serif italic font-normal text-gradient">Excellence</span>.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base lg:text-xl text-slate-400 font-medium leading-relaxed border-l-2 border-orchid/20 pl-6 lg:pl-8">
                Your journey with SimJung is a meticulously crafted ascent, bridging offshore efficiency with onshore reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24 px-6 md:px-12 bg-slate-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ASCENT_PROCESS.map((step, idx) => (
              <div key={idx} className="p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-white border border-slate-100 group hover:shadow-elegant transition-all duration-700 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-8 lg:mb-10">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-orchid group-hover:text-white transition-all duration-500">
                    <step.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <span className="text-[9px] lg:text-[10px] font-black tracking-widest text-slate-300 uppercase">{step.tag}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-[#1E1B4B] mb-4">{step.title}</h3>
                <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="bg-[#1E1B4B] rounded-[2.5rem] lg:rounded-[3.5rem] p-10 lg:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12">
            <div className="absolute top-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-orchid opacity-10 rounded-full blur-[60px] lg:blur-[100px] -ml-24 -mt-24 lg:-ml-32 lg:-mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 lg:mb-6 tracking-tight">Ready to Reach <br className="hidden md:block"/> the Peak?</h2>
              <p className="text-sm lg:text-base text-white/60 font-medium max-w-sm">Initiate your strategic offshore integration with our engineering leads today.</p>
            </div>
            <button 
              onClick={() => navigateTo('contact')}
              className="w-full md:w-auto px-8 lg:px-12 py-5 lg:py-6 bg-orchid text-white rounded-full font-black uppercase tracking-widest text-[9px] lg:text-[10px] relative z-10 hover:bg-white hover:text-[#1E1B4B] transition-all whitespace-nowrap"
            >
              Schedule Consultation <ArrowRight className="inline ml-3 lg:ml-4 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AscentPage;
