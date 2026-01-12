import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { Footer } from './Footer';

const kumonLogo = 'https://i.imgur.com/uMypwTz.jpeg';
const legalBg = 'https://images.unsplash.com/photo-1627990316935-9c473904206e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGxhdyUyMG9mZmljZXxlbnwxfHx8fDE3NjgxNjI3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const oakvilleLogo = 'https://i.imgur.com/QxIgWrX.jpeg';

export function WorkExperience() {
  const experiences = [
    {
      title: "Kumon Teaching Assistant",
      company: "Kumon",
      location: "Mississauga, ON",
      period: "April 2025 – August 2025",
      description: "Supported students across multiple grade levels in mathematics and English by delivering one-on-one academic guidance, reinforcing core concepts, and fostering independent problem-solving skills in a structured learning environment.",
      image: kumonLogo
    },
    {
      title: "Legal Assistant",
      company: "Parhar Law Office",
      location: "Oakville, ON",
      period: "July 2023 – August 2023",
      description: "Provided administrative and research support in a professional legal setting by assisting with document preparation, conducting case-related research, and contributing to client-facing work under the guidance of practicing lawyers.",
      image: legalBg
    },
    {
      title: "Mayor's Office Intern",
      company: "Oakville Town Hall",
      location: "Oakville, ON",
      period: "February 2023 – June 2023",
      description: "Contributed to municipal initiatives by supporting marketing and community outreach projects, collaborating with cross-functional teams, and assisting in the planning and rollout of a youth-focused public transit program.",
      image: oakvilleLogo
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-calamity">Work Experience</h1>
          <p className="text-lg sm:text-xl text-gray-600">My professional journey</p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="w-full h-full object-cover" 
                  style={index === 2 ? { objectPosition: 'center 35%' } : {}} 
                />
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-base sm:text-lg font-medium text-gray-700">{exp.company}</p>
                  </div>
                  <div className="mt-3 md:mt-0 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}