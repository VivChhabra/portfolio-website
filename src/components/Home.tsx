import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SpriteCharacter } from './SpriteCharacter';
import { Footer } from './Footer';

const platformImage = 'https://i.imgur.com/5C5eVA3.png';
const character1 = 'https://i.imgur.com/qiSSavZ.png';
const character2 = 'https://i.imgur.com/H4jr6Y1.png';
const character3 = 'https://i.imgur.com/PEGWJkr.png';
const resumeIcon = 'https://i.imgur.com/J53PQaf.png';
const linkedinIcon = 'https://i.imgur.com/oECTHLg.png';
const profilePhoto = 'https://i.imgur.com/3ShC8Pm.jpeg';
const workExperienceHover = 'https://i.imgur.com/kk8tJ5Q.jpeg';
const projectsHover = 'https://i.imgur.com/4Og2Mum.jpeg';
const designPortfolioHover = 'https://i.imgur.com/rTI661k.jpeg';

interface HomeProps {
  onNavigate: (page: 'work' | 'projects' | 'design') => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Combined Rectangular Bubble with 3D effect */}
          <motion.div 
            className="bg-gradient-to-b from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border-2 sm:border-4 border-gray-900 relative overflow-hidden" 
            style={{
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10">
              {/* Profile Photo with buttons below */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-shrink-0 flex flex-col items-center gap-3 sm:gap-4"
              >
                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-gray-900 shadow-lg bg-black">
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Resume and LinkedIn buttons */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href="https://docs.google.com/document/d/1_Nv-QaIjZy-L3fD_4GB0s_XKCJ2qWjJUk6G7dYgLFxI/edit?tab=t.0"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={resumeIcon} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                      Resume
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vivaanchhabra/"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedinIcon} alt="" className="w-4 h-4 sm:w-6 sm:h-6" />
                      LinkedIn
                    </a>
                  </div>
                  <a
                    href="https://github.com/VivChhabra"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </motion.div>

              {/* About Me Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex-1"
              >
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  <strong>Hi, I'm Vivaan Chhabra.</strong>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>A UofG student and aspiring problem-solver.</strong><br />
                  I enjoy building thoughtful, user-focused projects that combine creativity with technical thinking. My experience spans software projects, design work, tutoring, and collaborative initiatives, where I've developed strong communication, organization, and analytical skills. This portfolio showcases a range of projects that reflect my curiosity, adaptability, and passion for learning.
                </p>
              </motion.div>
            </div>

            {/* Pixelated gradient decoration at bottom - greens and browns */}
            <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 flex" style={{ imageRendering: 'pixelated' }}>
              {/* Create a pixelated pattern with greens and browns */}
              {Array.from({ length: 80 }).map((_, i) => {
                const colors = ['#8ab060', '#c2d368', '#5f7c3f'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                const opacity = 0.4 + Math.random() * 0.6;
                return (
                  <div
                    key={i}
                    className="flex-1"
                    style={{
                      backgroundColor: randomColor,
                      opacity: opacity,
                      minWidth: '8px',
                      height: '100%'
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 font-calamity">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'C', level: 80, color: '#52B788', image: 'https://i.imgur.com/bDQWQhZ.jpeg' },
              { name: 'Figma', level: 80, color: '#FF9F1C', image: 'https://i.imgur.com/zbmFdxg.jpeg' },
              { name: 'Aseprite', level: 80, color: '#B388EB', image: 'https://i.imgur.com/xrJSPw9.jpeg' },
              { name: 'Java', level: 70, color: '#74C0FC', image: 'https://i.imgur.com/lUuDKjf.jpeg' },
              { name: 'Godot', level: 70, color: '#FFD166', image: 'https://i.imgur.com/DMQZSIH.jpeg' },
              { name: 'React', level: 60, color: '#FF6B6B', image: 'https://i.imgur.com/mTmQVC3.jpeg' },
              { name: 'TypeScript', level: 60, color: '#FF8FA3', image: 'https://i.imgur.com/NyHDTko.jpeg' },
              { name: 'Python', level: 50, color: '#5390D9', image: 'https://i.imgur.com/evdL3Mf.jpeg' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 text-sm sm:text-base">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 text-xs sm:text-sm font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-visible">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: skill.color }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 1.2 }}
                      whileHover={{ y: -8, scale: 1.15, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)' }}
                      className="absolute -right-7 sm:-right-8 -top-6 sm:-top-7 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg border-2 border-gray-900 shadow-lg cursor-pointer overflow-hidden p-0.5"
                      style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                    >
                      <img
                        src={skill.image}
                        alt=""
                        className="w-full h-full"
                        style={{ 
                          transform: `scaleX(-1) ${skill.name === 'Java' || skill.name === 'Python' ? 'scale(1.2)' : ''} ${skill.name === 'C' ? 'translateY(-15%)' : ''}`, 
                          imageRendering: 'pixelated',
                          objectFit: 'cover'
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Platform Section with Characters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 font-calamity"
        >
          Explore My Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Platform Image */}
          <img
            src={platformImage}
            alt="Platform layers"
            className="w-full h-auto"
            style={{ imageRendering: 'pixelated' }}
          />

          {/* Character 1 - Top Platform (2nd Layer - White) - Work Experience */}
          <div className="absolute top-[15%] sm:top-[23%] md:top-[26%] left-[42%] -translate-x-1/2 scale-50 sm:scale-75 md:scale-100">
            <SpriteCharacter
              spriteSheet={character1}
              frameCount={1}
              frameWidth={16}
              frameHeight={16}
              frameRate={0}
              onClick={() => onNavigate('work')}
              label="Work Experience"
              scale={10}
              previewImage="https://images.unsplash.com/photo-1555747590-6d40108fae52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwZXhwZXJpZW5jZSUyMHJlc3VtZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgxODY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              hoverImage={workExperienceHover}
            />
          </div>

          {/* Character 3 - Middle Platform (3rd Layer - Pink Box) - Projects */}
          <div className="absolute top-[43%] sm:top-[51%] md:top-[54%] left-[68%] -translate-x-1/2 scale-50 sm:scale-75 md:scale-100">
            <SpriteCharacter
              spriteSheet={character3}
              frameCount={1}
              frameWidth={16}
              frameHeight={16}
              frameRate={0}
              onClick={() => onNavigate('projects')}
              label="Projects"
              scale={10}
              previewImage="https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4MTg2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              hoverImage={projectsHover}
            />
          </div>

          {/* Character 2 - Bottom Platform (4th Layer - Green and Blue) - Design Portfolio */}
          <div className="absolute top-[66%] sm:top-[74%] md:top-[77%] left-[29%] -translate-x-1/2 scale-50 sm:scale-75 md:scale-100">
            <SpriteCharacter
              spriteSheet={character2}
              frameCount={1}
              frameWidth={16}
              frameHeight={16}
              frameRate={0}
              onClick={() => onNavigate('design')}
              label="Design Portfolio"
              scale={10}
              previewImage="https://images.unsplash.com/photo-1673350808686-209dc177c898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBnYW1lJTIwYXJ0fGVufDF8fHx8MTc2ODE4NjU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              hoverImage={designPortfolioHover}
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}