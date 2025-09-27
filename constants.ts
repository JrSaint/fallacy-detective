
import type { Fallacy } from './types';

export const FALLACIES: Fallacy[] = [
  {
    name: "Strawman",
    description: "Misrepresenting someone's argument to make it easier to attack.",
    emoji: "🧍",
  },
  {
    name: "Red Herring",
    description: "Introducing an irrelevant topic to divert attention from the original issue.",
    emoji: "🐟",
  },
  {
    name: "Ad Hominem",
    description: "Attacking the person making the argument, rather than the argument itself.",
    emoji: "🗣️",
  },
  {
    name: "Appeal to Authority",
    description: "Claiming something is true because an authority figure said it, without other evidence.",
    emoji: "👑",
  },
  {
    name: "False Cause",
    description: "Assuming that because two events happened together, one caused the other.",
    emoji: "🔗",
  },
  {
    name: "Slippery Slope",
    description: "Arguing that a small first step will inevitably lead to a chain of negative events.",
    emoji: "⛷️",
  },
  {
    name: "Hasty Generalization",
    description: "Drawing a conclusion based on a small sample size, rather than looking at all the data.",
    emoji: "🏃‍♀️",
  },
  {
    name: "Bandwagon",
    description: "Appealing to popularity or the fact that many people do something as an attempted form of validation.",
    emoji: " bandwagon",
  },
  {
    name: "Appeal to Emotion",
    description: "Manipulating an emotional response in place of a valid or compelling argument.",
    emoji: "😭",
  },
  {
    name: "Circular Reasoning",
    description: "An argument that begins with what it's trying to end with.",
    emoji: "🔄",
  },

  { 
    name: "None", 
    description: "No identifiable logical fallacy present.", 
    emoji: "✅" 
  }
];

export const TEST_QUESTION_COUNT = 10;
