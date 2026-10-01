import { motion } from 'motion/react';
import { SpriteCharacter } from './SpriteCharacter';
import { Footer } from './Footer';

// Import all sprite assets
const backpackLogo = 'https://i.imgur.com/xZRiw1W.png';
const wheatStage1 = 'https://i.imgur.com/eazJvKW.png';
const wheatStage2 = 'https://i.imgur.com/cPAzqv9.png';
const barn = 'https://i.imgur.com/zyLWxsy.png';
const shop = 'https://i.imgur.com/u6najmz.png';
const cozySinghChar = 'https://i.imgur.com/ZGwL3Fo.png';
const forestBg = 'https://i.imgur.com/U8bFsKL.png';
const brodieFrog = 'https://i.imgur.com/SvR9FAQ.png';
const mushroom = 'https://i.imgur.com/6R3Ms7d.png';
const uncleFrank = 'https://i.imgur.com/qiSSavZ.png';

export function DesignPortfolio() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-calamity">Design Portfolio</h1>
          <p className="text-lg sm:text-xl text-gray-600">Game designs, prototypes, and pixel art</p>
        </motion.div>

        <div className="space-y-10 sm:space-y-16">
          {/* PackVault Figma Prototype */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-2 border-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="bg-[#873e3e] p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={backpackLogo} alt="PackVault Logo" className="w-12 h-12 sm:w-16 sm:h-16 pixelated" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">PackVault Design</h2>
                  <p className="text-sm sm:text-base text-red-100">Interactive Figma Prototype</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Complete UI/UX design prototype for PackVault, a Pokémon card collection management application. 
                  The prototype showcases the full user flow from collection organization to trade tracking.
                </p>
              </div>

              {/* Figma Prototype Embed */}
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Interactive Prototype</h3>
                <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300">
                  <iframe
                    className="w-full h-full"
                    src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zdy4Od8z1DE1QXyRhWqRd4/Untitled?node-id=1-2&starting-point-node-id=1%3A2"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">Click and interact with the prototype above to explore the design!</p>
              </div>
            </div>
          </motion.div>

          {/* LockIn Figma Prototype */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border-2 border-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="bg-[#8b5cf6] p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">LockIn Design</h2>
                  <p className="text-sm sm:text-base text-purple-100">Interactive Figma Prototype</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Complete UI/UX design for LockIn, a Valorant duo-matching web application. 
                  The prototype showcases the full user workflow from profile creation to AI-powered teammate matching.
                </p>
              </div>

              {/* Figma Prototype Embed */}
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Interactive Prototype</h3>
                <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300">
                  <iframe
                    className="w-full h-full"
                    src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/33pVioaFYHhWawAEhsxURJ/LockIn?node-id=52-23&p=f&t=eVd3IrFJ2kttssZf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=52%3A23"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">Click and interact with the prototype above to explore the design!</p>
              </div>
            </div>
          </motion.div>

          {/* Cozy Singh - Game Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border-2 border-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="bg-[#8ab060] p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Cozy Singh</h2>
              <p className="text-sm sm:text-base text-green-100">Farming Simulator Game</p>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                A relaxing farming simulator where players plant crops and sell them to the shop. Features crop growth stages, 
                a player home (barn), and a trading system. All assets created with Aseprite.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {['Game Development', 'Aseprite', 'Pixel Art', 'Game Design'].map((tech, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Game Assets</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-3 sm:p-4 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={wheatStage1} alt="Wheat Stage 1" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Wheat - Stage 1</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-3 sm:p-4 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={wheatStage2} alt="Wheat Stage 2" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Wheat - Stage 2</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-3 sm:p-4 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={barn} alt="Barn" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Barn</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-3 sm:p-4 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={shop} alt="Shop" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Shop</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-3 sm:p-4 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={cozySinghChar} alt="Main Character" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Main Character</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Uncle Frank - Puzzle Platformer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="bg-[#8ab060] p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Uncle Frank</h2>
              <p className="text-sm sm:text-base text-green-100">Puzzle Platformer</p>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                A puzzle platformer set in an atmospheric forest environment. Navigate through challenging levels while 
                encountering unique enemies like Brodie the Frog (with beautiful hair!) and common mushroom creatures. 
                All sprites and backgrounds designed in Aseprite.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {['Game Development', 'Aseprite', 'Level Design', 'Pixel Art'].map((tech, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Game Assets</h3>
              
              {/* Parallax Background - Full Width */}
              <div className="mb-4 sm:mb-6">
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border-2 border-gray-300">
                  <img src={forestBg} alt="Forest Parallax Background" className="pixelated w-full" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium text-center">Forest Parallax Background</p>
              </div>

              {/* Characters and Enemies */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-4 sm:p-6 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={uncleFrank} alt="Uncle Frank" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Uncle Frank</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-4 sm:p-6 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={brodieFrog} alt="Brodie the Frog" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Brodie the Frog</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-blue-100 to-green-100 p-4 sm:p-6 rounded-lg border-2 border-gray-300 w-full aspect-square flex items-center justify-center">
                    <img src={mushroom} alt="Mushroom Enemy" className="pixelated w-full h-full object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Mushroom Enemy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}