
import React from 'react';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

interface FeedbackBannerProps {
  isCorrect: boolean;
  correctAnswer: string;
}

const FeedbackBanner: React.FC<FeedbackBannerProps> = ({ isCorrect, correctAnswer }) => {
  const bgColor = isCorrect ? 'bg-green-500/80' : 'bg-red-500/80';
  const Icon = isCorrect ? CheckIcon : XIcon;
  const title = isCorrect ? 'Correct!' : 'Not Quite!';

  return (
    <div className={`p-4 rounded-xl text-white text-center shadow-lg ${bgColor}`}>
      <div className="flex items-center justify-center space-x-3">
        <Icon className="h-8 w-8" />
        <span className="text-2xl font-bold">{title}</span>
      </div>
      {!isCorrect && (
        <p className="mt-2 text-md">The correct answer was: <strong>{correctAnswer}</strong></p>
      )}
    </div>
  );
};

export default FeedbackBanner;
