import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimeAssistantProps {
  currentSection: string;
  onSectionChange?: (section: string) => void;
}

const AnimeAssistant: React.FC<AnimeAssistantProps> = ({ currentSection }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [gesture, setGesture] = useState('idle');
  const [speechBubble, setSpeechBubble] = useState('');

  const getSectionMessage = (section: string) => {
    switch (section) {
      case 'home':
        return "Hi! I'm Srishti's assistant mouse. Let's explore her portfolio!";
      case 'about':
        return "Here's Srishti's story. It's inspiring!";
      case 'skills':
        return "Look at these amazing skills! She's always learning!";
      case 'projects':
        return "Check out her creative projects!";
      case 'contact':
        return "Want to connect with her? Go ahead!";
      default:
        return "Let’s explore more of this portfolio!";
    }
  };

  useEffect(() => {
    setGesture(currentSection);
    setSpeechBubble(getSectionMessage(currentSection));

    const timer = setTimeout(() => {
      setSpeechBubble('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSection]);

  const getCharacterPosition = () => {
    switch (currentSection) {
      case 'home':
        return { x: 0, y: 0 };
      case 'about':
        return { x: -50, y: 20 };
      case 'skills':
        return { x: 50, y: -20 };
      case 'projects':
        return { x: -30, y: 30 };
      case 'contact':
        return { x: 20, y: -10 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const getGestureAnimation = () => {
    switch (gesture) {
      case 'pointing':
        return { rotate: [0, -15, 0], transition: { duration: 0.8, repeat: 2 } };
      case 'waving':
        return { rotate: [0, 20, -20, 0], transition: { duration: 1, repeat: 3 } };
      default:
        return { rotate: 0 };
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <motion.div
        animate={getCharacterPosition()}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative"
      >
        {/* Speech Bubble */}
        <AnimatePresence>
          {speechBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute -top-20 -left-36 bg-purple-900/90 dark:bg-white/90 backdrop-blur-sm border border-cyan-400/50 dark:border-gray-400 rounded-2xl px-4 py-2 min-w-[220px] shadow-xl"
            >
              <div className="text-cyan-100 dark:text-black text-sm font-medium text-center">
                {speechBubble}
              </div>
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-purple-900/90 dark:border-t-white/90"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Character */}
        <motion.div
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          className="relative w-32 h-48 cursor-pointer pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          onClick={() => setGesture('waving')}
        >
          {/* Character Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-pink-200/20 to-cyan-300/20 dark:from-gray-500/20 dark:to-purple-500/20 rounded-full blur-xl"></div>

          {/* Cute Mouse Character */}
          <div className="relative w-full h-full">
            {/* Head */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-pink-200 dark:bg-gray-700 rounded-full border-2 border-gray-400 dark:border-cyan-300 shadow-md">
              {/* Ears */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 dark:bg-gray-500 rounded-full border border-gray-400 dark:border-cyan-300"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-300 dark:bg-gray-500 rounded-full border border-gray-400 dark:border-cyan-300"></div>

              {/* Eyes */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-black dark:bg-white rounded-full animate-pulse">
                <div className="w-1 h-1 bg-white dark:bg-black rounded-full absolute top-0 left-0"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-black dark:bg-white rounded-full animate-pulse">
                <div className="w-1 h-1 bg-white dark:bg-black rounded-full absolute top-0 left-0"></div>
              </div>

              {/* Nose */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 dark:bg-pink-300 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimeAssistant;
