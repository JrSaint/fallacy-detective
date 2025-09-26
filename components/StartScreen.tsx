import React from 'react';
import Button from './Button';

interface StartScreenProps {
  onStart: () => void;
  error: string | null;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, error }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-2">Ready to Start?</h2>
      <p className="text-white/80 mb-8">
        Test your knowledge of logical fallacies with a fun quiz. Press the button to begin!
      </p>
      
      {error && <div className="bg-red-500/80 text-white p-3 rounded-lg mb-6">{error}</div>}

      <div className="w-full mt-4">
        <Button onClick={onStart} className="w-full bg-purple-600 hover:bg-purple-700 text-xl">
            <span>Start Quiz</span>
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
