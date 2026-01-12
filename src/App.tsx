import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { DesignPortfolio } from './components/DesignPortfolio';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'work' | 'projects' | 'design'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'work' && <WorkExperience />}
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'design' && <DesignPortfolio />}
    </div>
  );
}
