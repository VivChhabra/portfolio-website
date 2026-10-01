import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { Footer } from './Footer';

const cibcBg = 'https://i.imgur.com/cnJAYN7.jpeg';
const accionBg = 'https://i.imgur.com/KR5SP8Y.jpeg';

export function WorkExperience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "CIBC (Digital & CX Technology)",
      location: "Toronto, ON",
      period: "September 2026 – Present",
      description: "Collaborate within the Knowledge Central (KC) team on an AI-driven knowledge assistant that answers employee questions (e.g., mortgage inquiries) with cited sources from the knowledge base. Implement UI components and accessibility features using ARIA, Storybook, and NVDA screen-reader testing, ensuring inclusive, standards-compliant user experiences. Set to transition to the CIBC Today employee portal team for the second half of the internship.",
      image: cibcBg,
      imageStyle: { objectPosition: 'center 60%' }
    },
    {
      title: "Software Developer Intern",
      company: "Accion Labs",
      location: "Toronto, ON",
      period: "May 2026 – August 2026",
      description: "Implemented configurable local LLM support using Ollama, enabling seamless switching between cloud-hosted and locally hosted AI models. Integrated Docker-based services including PostgreSQL, MinIO, and Docworker to streamline local development and deployment. Implemented an observability stack using Grafana, Prometheus, Loki, Tempo, and Grafana Alloy to monitor application metrics, logs, and distributed traces. Deployed and managed a CI/CD pipeline on a self-managed Kubernetes control-plane server using Jenkins, automating build, test, and deployment from GitHub.",
      image: accionBg,
      imageStyle: { objectPosition: 'center 20%' }
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
                  style={exp.imageStyle}
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