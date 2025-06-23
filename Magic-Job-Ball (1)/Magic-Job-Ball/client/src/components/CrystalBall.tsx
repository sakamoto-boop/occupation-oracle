import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CrystalBallProps {
  size: "small" | "large";
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  animate?: "glow" | "shake" | "none";
}

export default function CrystalBall({ 
  size, 
  children, 
  onClick, 
  className = "", 
  animate = "none" 
}: CrystalBallProps) {
  const sizeClasses = size === "large" 
    ? "w-64 h-64 md:w-80 md:h-80" 
    : "w-32 h-32";
  
  const animations = {
    glow: {
      boxShadow: [
        "0 0 20px rgba(124, 58, 237, 0.5)",
        "0 0 40px rgba(124, 58, 237, 0.8), 0 0 60px rgba(124, 58, 237, 0.3)",
        "0 0 20px rgba(124, 58, 237, 0.5)"
      ]
    },
    shake: {
      x: [0, -2, 2, -2, 2, 0],
    },
    none: {}
  };

  const transition = {
    glow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    shake: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
    none: {}
  };

  return (
    <motion.div
      className={`crystal-ball ${sizeClasses} rounded-full mx-auto relative cursor-pointer transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
      animate={animations[animate]}
      transition={transition[animate]}
    >
      <div className={`absolute ${size === "large" ? "inset-4" : "inset-2"} rounded-full flex items-center justify-center`}>
        {children}
      </div>
    </motion.div>
  );
}
