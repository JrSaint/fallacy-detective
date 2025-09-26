
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-4">
      <p className="text-center text-white text-lg font-semibold mb-2">
        Question {current} of {total}
      </p>
      <div className="w-full bg-white/30 rounded-full h-4">
        <div
          className="bg-green-400 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
