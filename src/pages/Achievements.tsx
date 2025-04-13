import { motion } from 'framer-motion';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'AWS Solutions Architect Professional',
      organization: 'Amazon Web Services',
      date: '2023',
      description: 'Certified in designing and implementing distributed systems on AWS.',
      link: 'https://aws.amazon.com/verification'
    },
    {
      id: 2,
      title: 'First Place - AI Hackathon',
      organization: 'Tech Conference 2023',
      date: '2023',
      description: 'Developed an AI-powered solution for sustainable energy management.',
      link: 'https://hackathon.com/winner'
    },
    {
      id: 3,
      title: 'Best Technical Paper Award',
      organization: 'IEEE Conference',
      date: '2022',
      description: 'Published research on scalable microservices architecture.',
      link: 'https://ieee.org/paper'
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      organization: 'React Community',
      date: '2022',
      description: 'Made significant contributions to React documentation and bug fixes.',
      link: 'https://github.com/facebook/react'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Achievements</h1>
          <p className="text-lg text-gray-300">
            Recognition of my contributions to technology and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                  <p className="text-blue-400">{achievement.organization}</p>
                  <p className="text-gray-400 text-sm">{achievement.date}</p>
                </div>

                <p className="text-gray-300 mb-4 flex-grow">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Section for Skills or Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Cloud Architecture',
              'System Design',
              'Team Leadership',
              'Technical Writing',
              'Code Review',
              'Agile Methodologies',
              'Performance Optimization',
              'Security Best Practices'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm"
              >
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements; 