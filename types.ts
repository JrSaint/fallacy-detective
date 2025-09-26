export interface Fallacy {
  name: string;
  description: string;
  emoji: string;
}

export interface Question {
  scenario: string;
  options: Fallacy[];
  correctAnswer: Fallacy;
}

export type GameState = 'start' | 'playing' | 'feedback' | 'finished';