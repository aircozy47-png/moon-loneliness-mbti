
export enum AxisType {
  IE = 'IE', // Introvert vs Extrovert (Tendency)
  AR = 'AR', // Avoidant vs Relational (Coping)
  CT = 'CT', // Chronic vs Temporary (Persistence)
  ND = 'ND', // Night vs Day (Time)
}

export interface Question {
  id: number;
  text: string;
  axis: AxisType;
  options: {
    label: string;
    value: string; // 'I', 'E', 'A', 'R', etc.
  }[];
}

export interface LonelinessType {
  code: string;
  name: string;
  emoji: string;
  description: string;
  group: 'IA' | 'IR' | 'EA' | 'ER';
}

export type QuizState = 'landing' | 'quiz' | 'result';
