
import React from 'react';
import Button from './Button';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  let message = '';
  if (percentage === 100) message = "Perfect Score! You're a true Fallacy Detective! 🏆";
  else if (percentage >= 75) message = "Great job! You've got a sharp mind! ✨";
  else if (percentage >= 50) message = "Good effort! Keep practicing! 👍";
  else message = "Nice try! Every attempt makes you smarter! 🧠";

  return (
    <div className="text-center text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold">Quiz Complete!</h2>
      <p className="text-6xl font-bold my-4">
        {score} / {totalQuestions}
      </p>
      <div className="text-2xl my-4">{message}</div>
      <Button onClick={onRestart} className="mt-6 bg-purple-600 hover:bg-purple-700">
        Play Again
      </Button>
    </div>
  );
};

export default ScoreDisplay;
