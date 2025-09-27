export interface Fallacy {
  name: string;
  description: string;
  emoji: string;
}

export interface Question {
  // Each scenario is now a dialogue array (multiple speakers).
  dialogue: string[];

  // Options shown to the player
  options: Fallacy[];

  // The correct answer for this scenario
  correctAnswer: Fallacy;
}

export type GameState = 'start' | 'playing' | 'feedback' | 'finished';
