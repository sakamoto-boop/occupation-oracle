import { motion } from "framer-motion";
import { Home, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ExitConfirmDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ExitConfirmDialog({ isOpen, onConfirm, onCancel }: ExitConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="question-card rounded-2xl shadow-2xl max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-purple-400" size={32} />
              </div>
              <h3 className="font-cinzel text-2xl mb-3 text-purple-300">
                Return to Home?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your current progress will be lost. Are you sure you want to return to the welcome screen?
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={onConfirm}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-6"
              >
                <Home className="mr-2" size={16} />
                Yes, Return Home
              </Button>
              <Button
                onClick={onCancel}
                variant="outline"
                className="bg-gray-800/50 hover:bg-gray-700/50 border-gray-600 hover:border-purple-500 px-6"
              >
                <X className="mr-2" size={16} />
                Continue Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}