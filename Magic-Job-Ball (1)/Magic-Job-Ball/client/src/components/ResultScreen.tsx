import { motion } from "framer-motion";
import { Crown, RotateCcw, Share, Star } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import CrystalBall from "./CrystalBall";
import { JobPrediction } from "@/lib/gameLogic";

interface ResultScreenProps {
  prediction: JobPrediction;
  onPlayAgain: () => void;
}

export default function ResultScreen({ prediction, onPlayAgain }: ResultScreenProps) {
  const { toast } = useToast();
  const IconComponent = (Icons as any)[prediction.icon] || Crown;
  const filledStars = Math.floor(prediction.confidence * 5);

  const handleShare = async () => {
    const shareText = `The Occupation Oracle revealed my destined career: ${prediction.title}! What's yours?`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Occupation Oracle Career Prediction',
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        // User cancelled or sharing failed
      }
    } else {
      // Fallback - copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText + ' ' + window.location.href);
        toast({
          title: "Prophecy Copied!",
          description: "Your prediction has been copied to clipboard",
        });
      } catch (error) {
        toast({
          title: "Sharing Failed",
          description: "Unable to copy prediction to clipboard",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <CrystalBall 
        size="large" 
        animate="glow"
        className="mb-8"
      >
        <IconComponent className="text-6xl text-yellow-400 opacity-90" size={64} />
      </CrystalBall>
      
      <Card className="question-card rounded-2xl max-w-2xl mx-auto shadow-2xl">
        <CardContent className="p-8">
          <motion.h2 
            className="font-cinzel text-3xl md:text-4xl mb-6 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Your Destined Career
          </motion.h2>
          
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold text-yellow-400 mb-3">
              {prediction.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {prediction.description}
            </p>
          </motion.div>
          
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-2">
              <span className="text-sm text-gray-400 mr-2">Cosmic Confidence</span>
              <div className="flex">
                {Array(5).fill(null).map((_, i) => (
                  <Star
                    key={i}
                    className={`text-sm ${i < filledStars ? 'text-yellow-400 fill-current' : 'text-yellow-400'}`}
                    size={16}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-purple-300">
              {Math.round(prediction.confidence * 100)}% alignment with your responses
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Button
              onClick={onPlayAgain}
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <RotateCcw className="mr-2" size={16} />
              Divine Again
            </Button>
            <Button
              onClick={handleShare}
              className="w-full md:w-auto bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Share className="mr-2" size={16} />
              Share Prophecy
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
