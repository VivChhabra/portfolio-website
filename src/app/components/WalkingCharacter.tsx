import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface WalkingCharacterProps {
  spriteSheet: string;
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
  frameRate?: number;
  onClick: () => void;
  label: string;
  scale?: number;
  walkPath: { x: number; duration: number }[];
}

export function WalkingCharacter({
  spriteSheet,
  frameCount,
  frameWidth,
  frameHeight,
  frameRate = 150,
  onClick,
  label,
  scale = 3,
  walkPath
}: WalkingCharacterProps) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frameCount);
    }, frameRate);

    return () => clearInterval(interval);
  }, [frameCount, frameRate]);

  // Calculate total duration for seamless loop
  const totalDuration = walkPath.reduce((sum, point) => sum + point.duration, 0);

  return (
    <motion.button
      onClick={onClick}
      animate={{
        x: walkPath.map(p => p.x),
      }}
      transition={{
        x: {
          repeat: Infinity,
          duration: totalDuration,
          ease: "linear",
          times: walkPath.map((_, i, arr) => {
            const prevDurations = arr.slice(0, i).reduce((sum, p) => sum + p.duration, 0);
            return prevDurations / totalDuration;
          })
        }
      }}
      whileHover={{ scale: scale * 1.15 }}
      whileTap={{ scale: scale * 0.95 }}
      className="absolute cursor-pointer group bg-transparent border-0 p-0"
      style={{
        width: frameWidth * scale,
        height: frameHeight * scale,
      }}
    >
      <div
        style={{
          width: frameWidth * scale,
          height: frameHeight * scale,
          backgroundImage: `url(${spriteSheet})`,
          backgroundPosition: `-${currentFrame * frameWidth * scale}px 0`,
          backgroundSize: `${frameCount * frameWidth * scale}px ${frameHeight * scale}px`,
          imageRendering: 'pixelated',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: -5 }}
        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium pointer-events-none z-10"
      >
        {label}
      </motion.div>
    </motion.button>
  );
}
