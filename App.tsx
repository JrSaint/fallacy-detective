import React, { useState, useCallback } from 'react';
import type { Fallacy, Question, GameState } from './types';
import { FALLACIES, TEST_QUESTION_COUNT } from './constants';
import { SCENARIOS } from './scenarios';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import FeedbackBanner from './components/FeedbackBanner';
import ScoreDisplay from './components/ScoreDisplay';
import ProgressBar from './components/ProgressBar';
import Button from './components/Button';

// Helper function to shuffle an array using the Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Fallacy | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const createQuestions = (scenarios: { scenario: string; fallacy: Fallacy }[]): Question[] => {
    return scenarios.map(({ scenario, fallacy }) => {
      const otherFallacies = FALLACIES.filter(f => f.name !== fallacy.name);
      const randomOptions = shuffleArray(otherFallacies).slice(0, 3);
      const options = shuffleArray([...randomOptions, fallacy]);
      return {
        scenario,
        options,
        correctAnswer: fallacy,
      };
    });
  };

  const handleStart = useCallback(() => {
    setError(null);
    try {
      const scenariosWithFallacies = SCENARIOS.map(({ scenario, fallacyName }) => {
        const fallacy = FALLACIES.find(f => f.name === fallacyName);
        if (!fallacy) throw new Error(`Fallacy "${fallacyName}" not found in constants.`);
        return { scenario, fallacy };
      });

      const availableScenarios = shuffleArray(scenariosWithFallacies);
      const questionCount = Math.min(TEST_QUESTION_COUNT, availableScenarios.length);
      const selectedScenarios = availableScenarios.slice(0, questionCount);
      
      if (selectedScenarios.length === 0) {
        throw new Error("No scenarios available to start the quiz.");
      }

      const newQuestions = createQuestions(selectedScenarios);
      
      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameState('playing');
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred while starting the quiz.");
      }
      setGameState('start');
    }
  }, []);


  const handleAnswerSelect = (fallacy: Fallacy) => {
    if (gameState === 'playing') {
      setSelectedAnswer(fallacy);
    }
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;
    const correct = selectedAnswer.name === questions[currentQuestionIndex].correctAnswer.name;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
    setGameState('feedback');
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setGameState('playing');
    } else {
      setGameState('finished');
    }
  };

  const handleRestart = () => {
    setGameState('start');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setError(null);
  };
  
  const renderContent = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen onStart={handleStart} error={error} />;
      case 'playing':
      case 'feedback':
        const question = questions[currentQuestionIndex];
        return (
          <div className="w-full max-w-2xl mx-auto">
            <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
            <QuestionCard 
              question={question}
              onSelectAnswer={handleAnswerSelect}
              selectedAnswer={selectedAnswer}
              disabled={gameState === 'feedback'}
            />
            {gameState === 'playing' && selectedAnswer && (
              <div className="mt-6 text-center">
                 <Button onClick={handleCheckAnswer} className="bg-green-500 hover:bg-green-600">Check Answer</Button>
              </div>
            )}
            {gameState === 'feedback' && isCorrect !== null && (
              <div className="mt-6 space-y-4">
                <FeedbackBanner isCorrect={isCorrect} correctAnswer={question.correctAnswer.name} />
                <div className="text-center">
                    <Button onClick={handleNextQuestion}>Next Question</Button>
                </div>
              </div>
            )}
          </div>
        );
      case 'finished':
        return <ScoreDisplay score={score} totalQuestions={questions.length} onRestart={handleRestart} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white p-4 sm:p-8 flex flex-col items-center justify-center font-poppins">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-4xl min-h-[500px] flex flex-col">
        <header className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">🕵️‍♂️ Fallacy Detective</h1>
          <p className="text-white/80 mt-2 text-lg">Spot the flaw in the argument!</p>
        </header>
        <main className="flex-grow flex items-center justify-center">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}