import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import CrystalBall from "./CrystalBall";

export default function ThinkingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <CrystalBall 
        size="large" 
        animate="shake"
        className="mb-8"
      >
        <Brain className="text-6xl text-purple-300 opacity-80 animate-pulse" size={64} />
      </CrystalBall>
      
      <h2 className="font-cinzel text-3xl mb-4 text-purple-300">
        The spirits are consulting...
      </h2>
      <p className="text-xl text-gray-300 flex items-center justify-center">
        <Sparkles className="mr-2" size={20} />
        Divining your destined career path...
      </p>
      
      <div className="flex justify-center mt-6 space-x-1">
        <motion.div
          className="w-2 h-2 bg-purple-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-2 h-2 bg-purple-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
        />
        <motion.div
          className="w-2 h-2 bg-purple-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
