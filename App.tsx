
import React, { useState, useCallback } from 'react';
import { QuizState, AxisType, LonelinessType } from './types';
import { QUESTIONS, LONELINESS_TYPES } from './constants';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App: React.FC = () => {
  const [view, setView] = useState<QuizState>('landing');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [resultType, setResultType] = useState<LonelinessType | null>(null);

  const startQuiz = () => {
    setAnswers({});
    setView('quiz');
  };

  const calculateResult = (finalAnswers: Record<number, string>) => {
    const counts: Record<string, number> = { I: 0, E: 0, A: 0, R: 0, C: 0, T: 0, N: 0, D: 0 };
    
    Object.values(finalAnswers).forEach(val => {
      counts[val] = (counts[val] || 0) + 1;
    });

    const code = [
      counts['I'] >= counts['E'] ? 'I' : 'E',
      counts['A'] >= counts['R'] ? 'A' : 'R',
      counts['C'] >= counts['T'] ? 'C' : 'T',
      counts['N'] >= counts['D'] ? 'N' : 'D'
    ].join('');

    setResultType(LONELINESS_TYPES[code] || LONELINESS_TYPES['IACN']);
    setView('result');
  };

  const handleQuizComplete = (finalAnswers: Record<number, string>) => {
    setAnswers(finalAnswers);
    calculateResult(finalAnswers);
  };

  const reset = () => {
    setView('landing');
    setResultType(null);
  };

  return (
    <div className="max-w-[920px] mx-auto px-7 py-18 pb-22">
      {view === 'landing' && <Landing onStart={startQuiz} />}
      {view === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {view === 'result' && resultType && <Result type={resultType} onReset={reset} />}
    </div>
  );
};

export default App;
