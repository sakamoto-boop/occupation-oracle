import { motion } from "framer-motion";
import { Clock, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CrystalBall from "./CrystalBall";

interface QuizModeScreenProps {
  onSelectMode: (questionCount: number) => void;
  onBack: () => void;
}

export default function QuizModeScreen({ onSelectMode, onBack }: QuizModeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-center mb-8">
        <CrystalBall 
          size="small"
          animate="glow"
          className="mb-6"
        >
          <BookOpen className="text-3xl text-purple-300 opacity-80" size={40} />
        </CrystalBall>
        
        <h2 className="font-cinzel text-3xl md:text-4xl mb-4 text-purple-300">
          Choose Your Divination Path
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Select the depth of your mystical consultation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        {/* Quick Quiz Option */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card 
            className="question-card rounded-2xl shadow-2xl cursor-pointer h-full hover:border-purple-500 transition-colors"
            onClick={() => onSelectMode(7)}
          >
            <CardContent className="p-8 text-center h-full flex flex-col justify-between">
              <div>
                <Zap className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="font-cinzel text-2xl mb-3 text-yellow-400">
                  Quick Insight
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  7 carefully selected questions for a swift glimpse into your career destiny
                </p>
                <div className="flex items-center justify-center text-purple-300 mb-4">
                  <Clock className="mr-2" size={16} />
                  <span className="text-sm">~3 minutes</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectMode(7);
                }}
              >
                Begin Quick Reading
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Full Quiz Option */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card 
            className="question-card rounded-2xl shadow-2xl cursor-pointer h-full hover:border-purple-500 transition-colors"
            onClick={() => onSelectMode(20)}
          >
            <CardContent className="p-8 text-center h-full flex flex-col justify-between">
              <div>
                <BookOpen className="text-purple-400 mx-auto mb-4" size={48} />
                <h3 className="font-cinzel text-2xl mb-3 text-purple-400">
                  Deep Divination
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Complete 20-question journey for comprehensive career insights and higher accuracy
                </p>
                <div className="flex items-center justify-center text-purple-300 mb-4">
                  <Clock className="mr-2" size={16} />
                  <span className="text-sm">~8 minutes</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectMode(20);
                }}
              >
                Begin Full Reading
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Button
        variant="outline"
        onClick={onBack}
        className="bg-gray-800/50 hover:bg-gray-700/50 border-gray-600 hover:border-purple-500 transition-colors"
      >
        Back to Welcome
      </Button>
    </motion.div>
  );
}