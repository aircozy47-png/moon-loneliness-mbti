
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="text-center animate-in fade-in duration-1000">
      <div className="inline-flex items-center gap-2 bg-brand-green-light rounded-full px-4 py-1.5 mb-6">
        <div className="w-2 h-2 rounded-full bg-brand-green"></div>
        <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-navy/60">
          모온 · Moon
        </span>
      </div>
      
      <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
        외로움에도<br />
        <em className="not-italic font-normal text-brand-green italic">유형이 있다</em>
      </h1>
      
      <p className="text-sm md:text-base font-light text-brand-navy/60 max-w-md mx-auto leading-relaxed mb-12">
        4개의 축으로 외로움을 분류한 16가지 유형.<br />
        당신의 외로움은 어떤 색인가요?
      </p>

      <button
        onClick={onStart}
        className="bg-brand-navy text-white px-10 py-4 rounded-full font-medium hover:bg-brand-navy/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
      >
        테스트 시작하기
      </button>

      <div className="mt-16 pt-8 border-t border-brand-grey/50">
        <p className="text-[10px] uppercase tracking-widest text-brand-navy/30 mb-4">Core Axes</p>
        <div className="flex flex-wrap justify-center gap-4 text-[12px] font-medium text-brand-navy/50">
          <span>성향 (I/E)</span>
          <span>대처 (A/R)</span>
          <span>지속 (C/T)</span>
          <span>시간 (N/D)</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
