
import React, { useEffect, useState, useRef } from 'react';

interface MountainDividerProps {
  color: string;
  flipped?: boolean;
}

const MountainDivider: React.FC<MountainDividerProps> = ({ color, flipped }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative w-full h-40 overflow-hidden ${flipped ? 'rotate-180 -mt-1' : '-mb-1'}`}>
      <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" style={{ filter: 'url(#watercolor-filter)' }}>
        {/* Layered jagged mountain peaks (Everest Range silhouette) */}
        <path 
          d="M0,120 L0,70 L150,55 L320,85 L480,25 L650,90 L850,15 L1050,100 L1250,45 L1440,85 L1440,120 Z" 
          fill="currentColor"
          className={`${color} transition-all duration-[2500ms] cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        {/* Sketched ridge line */}
        <path 
          d="M0,70 L150,55 L320,85 L480,25 L650,90 L850,15 L1050,100 L1250,45 L1440,85" 
          fill="none" 
          stroke="#F97316" 
          strokeWidth="0.8"
          strokeOpacity="0.15"
          strokeDasharray="1440"
          strokeDashoffset={isVisible ? "0" : "1440"}
          className="transition-all duration-[3500ms] delay-700"
        />
      </svg>
    </div>
  );
};

export default MountainDivider;
