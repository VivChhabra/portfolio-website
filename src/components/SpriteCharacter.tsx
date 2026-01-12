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
  previewImage,
  hoverImage
}: SpriteCharacterProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const displayImage = hoverImage || previewImage;

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer group bg-transparent border-0 p-0"
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
          backgroundPosition: `0 0`,
          backgroundSize: `${frameWidth * scale}px ${frameHeight * scale}px`,
          imageRendering: 'pixelated',
        }}
      />
      
      {/* Preview Bubble */}
      {displayImage && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={isHovered ? { opacity: 1, y: -20, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 pointer-events-none z-20"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border-2 border-gray-900 overflow-hidden">
            <div className="w-48 h-32 sm:w-64 sm:h-40">
              <img 
                src={displayImage} 
                alt={`Preview of ${label}`}
                className="w-full h-full object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <div className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border-t-2 border-gray-900">
              <p className="text-xs sm:text-sm font-bold text-gray-900 text-center">{label}</p>
            </div>
          </div>
          {/* Speech bubble arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-transparent border-t-[12px] sm:border-t-[16px] border-t-gray-900 border-r-[8px] sm:border-r-[12px] border-r-transparent" />
        </motion.div>
      )}

      {/* Label Tooltip (fallback when no preview) */}
      {!displayImage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: -5 }}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium pointer-events-none z-10"
        >
          {label}
        </motion.div>
      )}
    </motion.button>
  );
}