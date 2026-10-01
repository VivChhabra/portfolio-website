import { motion } from 'motion/react';
import { useState } from 'react';

interface SpriteCharacterProps {
  spriteSheet: string;
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
  frameRate?: number;
  onClick: () => void;
  label: string;
  scale?: number;
  previewImage?: string;
  hoverImage?: string;
}

export function SpriteCharacter({
  spriteSheet,
  frameWidth,
  frameHeight,
  onClick,
  label,
  scale = 3,
}: SpriteCharacterProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer bg-transparent border-0 p-0"
      style={{ width: frameWidth * scale, height: frameHeight * scale }}
    >
      <div
        style={{
          width: frameWidth * scale,
          height: frameHeight * scale,
          backgroundImage: `url(${spriteSheet})`,
          backgroundPosition: '0 0',
          backgroundSize: `${frameWidth * scale}px ${frameHeight * scale}px`,
          imageRendering: 'pixelated',
        }}
      />

      {/* Label tab */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={isHovered ? { opacity: 1, y: -12 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.18 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 pointer-events-none z-20"
      >
        <div
          className="bg-white border-2 border-gray-900 rounded-lg px-3 py-1.5 whitespace-nowrap text-xs sm:text-sm font-bold text-gray-900"
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.18)' }}
        >
          {label}
        </div>
      </motion.div>
    </motion.button>
  );
}