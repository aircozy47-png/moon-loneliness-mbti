
import React, { useEffect, useState } from 'react';
import { LonelinessType } from '../types';
import { getSolaceMessage } from '../services/geminiService';

interface ResultProps {
  type: LonelinessType;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ type, onReset }) => {
  const [solace, setSolace] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolace = async () => {
      setLoading(true);
      const msg = await getSolaceMessage(type);
      setSolace(msg);
      setLoading(false);
    };
    fetchSolace();
  }, [type]);

  const groupClass = {
    IA: 'bg-brand-peach-light text-[#a35e4e]',
    IR: 'bg-[#e0edf0] text-[#307f94]',
    EA: 'bg-brand-green-light text-[#4e7a48]',
    ER: 'bg-[#e8e3d8] text-[#6b5d3f]',
  }[type.group];

  const borderClass = {
    IA: 'border-[#a35e4e]/20',
    IR: 'border-[#307f94]/20',
    EA: 'border-[#4e7a48]/20',
    ER: 'border-[#6b5d3f]/20',
  }[type.group];

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700">
      <div className="text-center mb-10">
        <div className="inline-block px-3 py-1 bg-brand-navy/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-brand-navy/40 mb-4">
          Test Completed
        </div>
        <h2 className="text-2xl font-serif text-brand-navy">당신의 외로움 프로필</h2>
      </div>

      <div className={`relative max-w-sm mx-auto p-8 rounded-[32px] bg-white shadow-2xl border ${borderClass} overflow-hidden mb-12`}>
        {/* Decorative corner wash */}
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 ${groupClass}`}></div>
        
        <div className="relative z-10 text-center">
          <span className="text-5xl block mb-6">{type.emoji}</span>
          <div className={`inline-block px-4 py-1 rounded-full ${groupClass} text-[18px] font-serif font-bold mb-3 tracking-wider`}>
            {type.code}
          </div>
          <h3 className="text-2xl font-bold text-brand-navy mb-4 leading-tight">{type.name}</h3>
          <p className="text-brand-navy/60 text-sm leading-relaxed font-light px-4">
            {type.description}
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-brand-grey/30 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-brand-green flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">AI가 건네는 위로</h4>
            <p className="text-[11px] text-brand-navy/40 uppercase tracking-tighter">Personalized Solace Message</p>
          </div>
        </div>
        
        {loading ? (
          <div className="space-y-3">
            <div className="h-4 bg-brand-grey/20 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-brand-grey/20 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-brand-grey/20 rounded w-5/6 animate-pulse"></div>
          </div>
        ) : (
          <p className="text-brand-navy/80 text-sm leading-relaxed italic whitespace-pre-wrap">
            "{solace}"
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
            { axis: '성향', val: type.code[0], desc: type.code[0] === 'I' ? '내향(I)' : '외향(E)' },
            { axis: '대처', val: type.code[1], desc: type.code[1] === 'A' ? '회피(A)' : '관계(R)' },
            { axis: '지속', val: type.code[2], desc: type.code[2] === 'C' ? '만성(C)' : '일시(T)' },
            { axis: '시간', val: type.code[3], desc: type.code[3] === 'N' ? '심야(N)' : '주간(D)' },
        ].map((axis, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-brand-grey/30 text-center">
                <span className="text-[10px] font-bold text-brand-navy/30 uppercase block mb-1">{axis.axis}</span>
                <span className="text-xl font-serif font-bold text-brand-navy block">{axis.val}</span>
                <span className="text-[11px] text-brand-navy/60">{axis.desc}</span>
            </div>
        ))}
      </div>

      <div className="text-center space-y-6">
        <button
          onClick={onReset}
          className="text-brand-navy/40 hover:text-brand-navy/70 text-sm font-medium underline underline-offset-4 transition-colors"
        >
          테스트 다시 하기
        </button>
        
        <footer className="pt-10 border-t border-brand-grey/40">
            <p className="text-[11px] font-light text-brand-navy/30 italic">
                외로움 MBTI는 MBTI® 공식 테스트가 아닌<br />
                모온(Moon)의 독립 패러디 콘텐츠입니다.
            </p>
        </footer>
      </div>
    </div>
  );
};

export default Result;
