import { Mail } from 'lucide-react';

const linkedinIcon = 'https://i.imgur.com/oECTHLg.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-white font-calamity">Connect with me:</h3>
            <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
              <a
                href="mailto:chhabra.vivaan5@gmail.com"
                className="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="break-all">chhabra.vivaan5@gmail.com</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/vivaanchhabra/"
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200 text-xs sm:text-sm flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-xs sm:text-sm text-gray-400 max-w-md">
            <p>© 2026 Vivaan Chhabra. Built with React, JS, and all assets done on Aseprite with exception of character hover images.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}