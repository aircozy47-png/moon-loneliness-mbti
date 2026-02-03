
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: Record<number, string>) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="max-w-xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[11px] font-bold text-brand-navy/40 uppercase tracking-widest">
            Question {currentIndex + 1} of {QUESTIONS.length}
          </span>
          <span className="text-[11px] font-bold text-brand-navy/60">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1 bg-brand-grey/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-green transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-[140px] flex items-center justify-center text-center mb-10">
        <h2 className="text-xl md:text-2xl font-medium text-brand-navy leading-snug">
          {currentQuestion.text}
        </h2>
      </div>

      <div className="space-y-4">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option.value)}
            className="w-full text-left bg-white p-6 rounded-2xl border border-brand-navy/5 shadow-sm hover:shadow-md hover:border-brand-green transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-bg group-hover:bg-brand-green-light flex items-center justify-center text-brand-navy/30 group-hover:text-brand-green font-bold text-xs transition-colors">
                {idx === 0 ? 'A' : 'B'}
              </div>
              <span className="text-sm md:text-base text-brand-navy/80 group-hover:text-brand-navy font-medium transition-colors">
                {option.label}
              </span>
            </div>
          </button>
        ))}
      </div>
      
      {currentIndex > 0 && (
        <button 
          onClick={() => setCurrentIndex(prev => prev - 1)}
          className="mt-12 text-brand-navy/30 hover:text-brand-navy/60 text-xs font-semibold uppercase tracking-widest transition-colors flex items-center gap-1 mx-auto"
        >
          ← Previous
        </button>
      )}
    </div>
  );
};

export default Quiz;
