import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Footer } from './Footer';

const packVaultCover = 'https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2ODE5MjE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const ugrtCover = 'https://i.imgur.com/a9QS7Hg.jpeg';

export function Projects() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-calamity">Projects</h1>
          <p className="text-lg sm:text-xl text-gray-600">Web applications and development work</p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {/* PackVault */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-2 border-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-48 sm:h-64 overflow-hidden relative flex items-center justify-center">
              <img src={packVaultCover} alt="PackVault Cover" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 text-white text-center drop-shadow-lg px-4">
                <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">PackVault</h3>
                <p className="text-base sm:text-xl">Pokémon Card Collection Manager</p>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">PackVault</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Built a web app to manage Pokémon card collections with auto-generated binders based on user-defined rules. 
                Implemented trade tracking with notes and automatic net profit/loss calculations per trade. Integrated a Pokémon 
                card search/pricing API with failsafes and fallbacks to handle missing or unreliable data. Designed modular 
                components and persistent storage to ensure a smooth, reliable user experience across sessions.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {['TypeScript', 'React', 'CSS (Tailwind)'].map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
                <strong>Project Timeline:</strong> November - December 2025
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/VivChhabra/PackVault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                <a
                  href="https://pack-vault.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* UofG Robotics Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border-2 border-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-48 sm:h-64 overflow-hidden relative flex items-center justify-center">
              <img src={ugrtCover} alt="UofG Robotics Cover" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 text-white text-center drop-shadow-lg px-4">
                <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">UofG Robotics</h3>
                <p className="text-base sm:text-xl">Team Website</p>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">UofG Robotics Website</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Designed and developed front-end components for the University of Guelph Robotics Team website, including 
                creating the main page layout and sponsor page while contributing to back-end integration. Produced a complete 
                UI/UX blueprint in Figma to guide the site's structure and visual design, improving consistency and usability 
                across team web assets.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {['React', 'Figma', 'UI/UX Design', 'Web Development'].map((tech, i) => (
                  <span key={i} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
                <strong>Project Timeline:</strong> September 2024 - April 2025
              </div>

              <div className="flex gap-3">
                <a
                  href="https://ugrt.github.io/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}