import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CrystalBall from "./CrystalBall";
import ExitConfirmDialog from "./ExitConfirmDialog";
import { Question } from "@/lib/gameLogic";

interface QuestionScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (value: string) => void;
  isAnimating: boolean;
  onExitToHome: () => void;
}

export default function QuestionScreen({ 
  question, 
  questionIndex, 
  totalQuestions, 
  onAnswer, 
  isAnimating,
  onExitToHome 
}: QuestionScreenProps) {
  const [showExitDialog, setShowExitDialog] = useState(false);
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  const handleCrystalBallClick = () => {
    setShowExitDialog(true);
  };

  const handleExitConfirm = () => {
    setShowExitDialog(false);
    onExitToHome();
  };

  const handleExitCancel = () => {
    setShowExitDialog(false);
  };

  return (
    <motion.div
      key={questionIndex}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400 font-cinzel">Question Progress</span>
          <span className="text-sm text-purple-400">
            {questionIndex + 1} of {totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Crystal Ball (smaller) */}
      <div className="text-center mb-8">
        <CrystalBall 
          size="small"
          animate={isAnimating ? "shake" : "none"}
          onClick={handleCrystalBallClick}
        >
          <HelpCircle className="text-2xl text-purple-300 opacity-80" size={32} />
        </CrystalBall>
      </div>

      {/* Question Card */}
      <Card className="question-card rounded-2xl max-w-2xl mx-auto shadow-2xl">
        <CardContent className="p-8">
          <h2 className="font-cinzel text-2xl md:text-3xl text-center mb-6 text-purple-300">
            The spirits whisper...
          </h2>
          <p className="text-lg text-center mb-8 leading-relaxed">
            {question.text}
          </p>
          
          {/* Answer Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => {
              const IconComponent = (Icons as any)[option.icon] || Icons.Circle;
              
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full text-left p-4 h-auto bg-gray-800/50 hover:bg-purple-800/30 border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                    onClick={() => onAnswer(option.value)}
                  >
                    <div className="flex items-center">
                      <IconComponent className="mr-4 text-purple-400 group-hover:text-yellow-400 transition-colors" size={20} />
                      <span>{option.text}</span>
                    </div>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <ExitConfirmDialog 
        isOpen={showExitDialog}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />
    </motion.div>
  );
}
