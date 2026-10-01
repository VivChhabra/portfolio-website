import { motion } from 'motion/react';
import { Briefcase, FolderOpen, Palette } from 'lucide-react';

interface DonkeyKongLevelsProps {
  onNavigate: (page: 'work' | 'projects' | 'design') => void;
}

export function DonkeyKongLevels({ onNavigate }: DonkeyKongLevelsProps) {
  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-6xl font-black text-center mb-12 text-white"
        style={{ 
          fontFamily: 'monospace',
          textShadow: '4px 4px 0px rgba(0,0,0,0.5)'
        }}
      >
        CLIMB THE LEVELS
      </motion.h2>

      <div className="max-w-6xl mx-auto relative" style={{ height: '800px' }}>
        {/* Level 3 - Top */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-0 left-0 right-0"
        >
          <div className="flex justify-end items-center gap-8 pr-8">
            <Platform />
            <Character
              icon={<Palette className="w-12 h-12" />}
              label="DESIGN PORTFOLIO"
              color="bg-purple-500"
              onClick={() => onNavigate('design')}
            />
          </div>
        </motion.div>

        {/* Ladder between Level 3 and 2 */}
        <div className="absolute top-32 right-32 w-16 h-32 flex justify-around border-l-4 border-r-4 border-yellow-600">
          <div className="w-full flex flex-col justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-1 bg-yellow-600" />
            ))}
          </div>
        </div>

        {/* Level 2 - Middle */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-64 left-0 right-0"
        >
          <div className="flex justify-start items-center gap-8 pl-8">
            <Character
              icon={<FolderOpen className="w-12 h-12" />}
              label="PROJECTS"
              color="bg-blue-500"
              onClick={() => onNavigate('projects')}
            />
            <Platform />
          </div>
        </motion.div>

        {/* Ladder between Level 2 and 1 */}
        <div className="absolute top-96 left-32 w-16 h-32 flex justify-around border-l-4 border-r-4 border-yellow-600">
          <div className="w-full flex flex-col justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-1 bg-yellow-600" />
            ))}
          </div>
        </div>

        {/* Level 1 - Bottom */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="flex justify-end items-center gap-8 pr-8">
            <Platform />
            <Character
              icon={<Briefcase className="w-12 h-12" />}
              label="WORK EXPERIENCE"
              color="bg-red-500"
              onClick={() => onNavigate('work')}
            />
          </div>
        </motion.div>

        {/* Barrels rolling down */}
        <motion.div
          animate={{
            y: [0, 800],
            x: [100, -100]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear"
          }}
          className="absolute top-0 left-1/2 text-6xl"
        >
          🛢️
        </motion.div>
      </div>
    </div>
  );
}

function Platform() {
  return (
    <div className="flex-1 max-w-md">
      <div className="h-6 bg-orange-600 border-4 border-black" 
           style={{ imageRendering: 'pixelated' }}>
        <div className="h-full flex gap-1 px-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 bg-orange-700" />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CharacterProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

function Character({ icon, label, color, onClick }: CharacterProps) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.2,
        rotate: [0, -5, 5, -5, 0],
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${color} border-4 border-black p-6 rounded-lg shadow-lg cursor-pointer group relative`}
      style={{ imageRendering: 'pixelated' }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-white"
      >
        {icon}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white px-4 py-2 rounded font-black text-sm"
      >
        {label}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black" />
      </motion.div>

      {/* Pixel sparkles on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute -top-2 -right-2 text-2xl"
      >
        ✨
      </motion.div>
    </motion.button>
  );
}
