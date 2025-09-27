import React from 'react';
import type { Fallacy, Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: Fallacy | null;
  onSelectAnswer: (fallacy: Fallacy) => void;
  disabled: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedAnswer, onSelectAnswer, disabled }) => {
  return (
    <div className="bg-white/90 text-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl w-full">
      <div className="space-y-3 text-lg sm:text-xl leading-relaxed">
        {/* Handle both string and dialogue array cases for backwards compatibility */}
        {Array.isArray((question as any).dialogue)
          ? (question as any).dialogue.map((line: string, idx: number) => (
              <p key={idx} className="font-medium text-center">{line}</p>
            ))
          : (
              <p className="font-medium text-center">"{(question as any).scenario}"</p>
            )
        }
      </div>

      <div className="mt-8 space-y-4">
        {question.options.map((option) => {
          const isSelected = selectedAnswer?.name === option.name;
          return (
            <button
              key={option.name}
              onClick={() => onSelectAnswer(option)}
              disabled={disabled}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200
                ${isSelected ? 'bg-purple-500 text-white border-purple-700 shadow-md' : 'bg-white hover:bg-purple-100 border-gray-200'}
                ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
              `}
            >
              <span className="text-2xl mr-3">{option.emoji}</span>
              <span className="font-bold text-lg">{option.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
