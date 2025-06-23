import { motion } from "framer-motion";
import { Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CrystalBall from "./CrystalBall";
import { useState, useEffect } from "react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const mysticalPhrases = [
  "Touch the mystical orb to begin your journey...",
  "Place your hand upon the ancient sphere of wisdom...",
  "Awaken the sacred crystal with your touch...",
  "Let the ethereal globe reveal your destiny...",
  "Caress the divine orb to unlock your future...",
  "Connect with the enchanted sphere of prophecy...",
  "Embrace the luminous crystal of career divination...",
  "Channel your essence through the magical sphere...",
  "Invoke the power of the celestial fortune teller...",
  "Commune with the transcendent orb of insight...",
  "Activate the mystical vessel of vocational secrets...",
  "Summon your fate through the sacred crystal ball...",
  "Engage the supernatural sphere of career wisdom...",
  "Unlock the arcane knowledge within the orb...",
  "Tap into the otherworldly source of guidance...",
  "Disturb the slumber of the prophetic crystal...",
  "Unleash the ancient magic of career revelation...",
  "Merge your spirit with the cosmic sphere...",
  "Stir the dormant energies of the mystic globe...",
  "Penetrate the veil with the sacred orb's power...",
  "Lay your palm upon the enigmatic sphere of fate...",
  "Breathe life into the slumbering crystal of truth...",
  "Harness the eternal wisdom of the mystical globe...",
  "Beckon the ancient spirits through the sacred orb...",
  "Draw forth the hidden knowledge from the crystal depths...",
  "Ignite the dormant power within the sphere of dreams...",
  "Whisper your desires to the enchanted crystal ball...",
  "Embrace the cosmic energy of the prophetic vessel...",
  "Unleash the forbidden secrets of the mystic sphere...",
  "Commune with the ethereal forces through divine touch...",
  "Awaken the slumbering oracle within the crystal realm...",
  "Channel the celestial vibrations through sacred contact...",
  "Unlock the mysteries veiled within the sphere of eternity...",
  "Invoke the ancient guardians of the mystical crystal...",
  "Release the bound energies of the prophetic globe...",
  "Connect your soul to the infinite wisdom of the orb...",
  "Disturb the cosmic silence with your mortal touch...",
  "Summon the ethereal messengers through crystal communion...",
  "Penetrate the astral barrier with the sphere's guidance...",
  "Awaken the dormant prophecies within the sacred vessel...",
  "Channel your life force into the transcendent crystal...",
  "Unlock the gateway to destiny through divine contact...",
  "Merge your consciousness with the omniscient sphere...",
  "Invoke the primordial magic of the celestial orb...",
  "Draw upon the infinite reservoir of mystical knowledge...",
  "Commune with the ancient sages through crystal meditation...",
  "Unleash the temporal secrets hidden in the sphere...",
  "Connect with the universal consciousness via sacred touch...",
  "Awaken the slumbering visions within the crystal matrix..."
];

const luckyPhrase = "If you see this, you are lucky! Enjoy your day!";

// Combine regular phrases with the lucky phrase (1 in 50 chance)
const allPhrases = [...mysticalPhrases, luckyPhrase];

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set random initial phrase
    setCurrentPhraseIndex(Math.floor(Math.random() * allPhrases.length));

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      
      // After fade out completes, change phrase and fade in
      setTimeout(() => {
        setCurrentPhraseIndex(prev => (prev + 1) % allPhrases.length);
        setIsVisible(true);
      }, 500); // Half second for fade out
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <header className="text-center mb-12 animate-float">
        <h1 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
          The Occupation Oracle
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Unveil the mysteries of your destined career path through the ancient art of digital divination
        </p>
      </header>

      <div className="relative mb-12">
        <CrystalBall 
          size="large" 
          onClick={onStart}
          animate="glow"
        >
          <Eye className="text-6xl text-purple-300 opacity-80" size={64} />
        </CrystalBall>
        
        <div className="text-center mt-8">
          <div className="relative">
            <motion.p 
              key={currentPhraseIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`text-lg mb-6 font-cinzel h-8 ${
                allPhrases[currentPhraseIndex] === luckyPhrase 
                  ? "text-yellow-400 font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent lucky-sparkles" 
                  : "text-gray-300"
              }`}
            >
              {allPhrases[currentPhraseIndex]}
            </motion.p>
            {allPhrases[currentPhraseIndex] === luckyPhrase && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 text-yellow-400 animate-pulse"
                >
                  ✨⭐✨
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 text-gray-300 animate-pulse"
                >
                  ⭐✨⭐
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-12 -translate-y-6 text-yellow-500"
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    rotate: -360,
                    scale: [1, 1.3, 1]
                  }}
                  className="absolute right-1/4 top-1/2 transform -translate-y-1/2 translate-x-12 -translate-y-6 text-gray-400"
                  transition={{ 
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  ⭐
                </motion.div>
              </>
            )}
          </div>
          <Button 
            onClick={onStart}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Sparkles className="mr-2" size={16} />
            Begin Divination
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
