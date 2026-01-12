import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 border-4 border-black"
        style={{ imageRendering: 'pixelated' }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="relative"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-black shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-black px-4 py-2 rotate-12"
            >
              <span className="font-black text-xl">LVL 99</span>
            </motion.div>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl mb-4 text-black tracking-tight"
              style={{ fontFamily: 'monospace' }}
            >
              PLAYER ONE
            </motion.h1>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black text-green-400 p-4 rounded-lg mb-6 font-mono text-sm md:text-base"
            >
              <p className="mb-2">{'> INITIALIZING PORTFOLIO...'}</p>
              <p className="mb-2">{'> LOADING PROFILE DATA...'}</p>
              <p className="text-white">
                Hey! I'm a university student passionate about gaming, pixel art, and game design. 
                I spend my time creating characters and worlds in Aseprite, building projects, 
                and leveling up my skills. Welcome to my digital arcade!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center md:justify-start flex-wrap"
            >
              <div className="bg-red-500 border-4 border-black px-4 py-2 font-black text-white">
                🎮 GAMER
              </div>
              <div className="bg-blue-500 border-4 border-black px-4 py-2 font-black text-white">
                🎨 PIXEL ARTIST
              </div>
              <div className="bg-purple-500 border-4 border-black px-4 py-2 font-black text-white">
                💻 DEVELOPER
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-12 text-center"
        >
          <p className="font-black text-xl mb-2">SCROLL DOWN TO START</p>
          <div className="text-4xl">⬇️</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
