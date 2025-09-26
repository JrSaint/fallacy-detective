
import React from 'react';

interface LoadingSpinnerProps {
    text: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-300"></div>
      <p className="mt-4 text-xl font-semibold">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
