import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import StarField from "@/components/StarField";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuizModeScreen from "@/components/QuizModeScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ThinkingScreen from "@/components/ThinkingScreen";
import ResultScreen from "@/components/ResultScreen";
import { getRandomizedQuestions, calculateJobPrediction, type JobPrediction, type Question } from "@/lib/gameLogic";

type GameState = 'welcome' | 'mode-selection' | 'questioning' | 'thinking' | 'result';

export default function MagicBallPage() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [prediction, setPrediction] = useState<JobPrediction | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const saveGameMutation = useMutation({
    mutationFn: async (sessionData: {
      userId: number | null;
      answers: string[];
      predictedJob: string;
      confidence: number;
      completedAt: string;
    }) => {
      const response = await apiRequest("POST", "/api/game/complete", sessionData);
      return response.json();
    },
  });

  const goToModeSelection = () => {
    setGameState('mode-selection');
  };

  const startGame = (questionCount: number) => {
    const randomizedQuestions = getRandomizedQuestions(questionCount);
    setQuestions(randomizedQuestions);
    setGameState('questioning');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setPrediction(null);
  };

  const backToWelcome = () => {
    setGameState('welcome');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setPrediction(null);
  };

  const handleAnswer = (value: string) => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const newAnswers = [...userAnswers, value];
      setUserAnswers(newAnswers);
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnimating(false);
      } else {
        // All questions answered, show thinking screen
        setGameState('thinking');
        setIsAnimating(false);
        
        // Calculate prediction and show result after delay
        setTimeout(() => {
          const jobPrediction = calculateJobPrediction(newAnswers);
          setPrediction(jobPrediction);
          
          // Save game session
          saveGameMutation.mutate({
            userId: null, // For now, not requiring user authentication
            answers: newAnswers,
            predictedJob: jobPrediction.title,
            confidence: Math.round(jobPrediction.confidence * 100),
            completedAt: new Date().toISOString(),
          });
          
          setGameState('result');
        }, 3000);
      }
    }, 800);
  };

  const playAgain = () => {
    setGameState('welcome');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setPrediction(null);
    setQuestions([]);
  };

  return (
    <div className="mystical-bg min-h-screen relative overflow-x-hidden">
      <StarField />
      
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center relative">
        <div className="w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {gameState === 'welcome' && (
              <WelcomeScreen key="welcome" onStart={goToModeSelection} />
            )}
            
            {gameState === 'mode-selection' && (
              <QuizModeScreen 
                key="mode-selection" 
                onSelectMode={startGame} 
                onBack={backToWelcome} 
              />
            )}
            
            {gameState === 'questioning' && questions.length > 0 && (
              <QuestionScreen
                key={`question-${currentQuestionIndex}`}
                question={questions[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                isAnimating={isAnimating}
                onExitToHome={backToWelcome}
              />
            )}
            
            {gameState === 'thinking' && (
              <ThinkingScreen key="thinking" />
            )}
            
            {gameState === 'result' && prediction && (
              <ResultScreen
                key="result"
                prediction={prediction}
                onPlayAgain={playAgain}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
