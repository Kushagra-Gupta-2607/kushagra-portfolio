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
      title: 'Codeforces Expert',
      organization: 'Codeforces',
      date: '2023',
      description: 'Secured ranks of 538, 726, and 763 in Division 2 Contests, demonstrating strong problem-solving abilities and algorithmic thinking.',
      link: 'https://codeforces.com/profile/nirvana___flame'
    },
    {
      id: 2,
      title: 'LeetCode Knight',
      organization: 'LeetCode',
      date: '2023',
      description: 'Achieved ranks of 289 and 1044 in Biweekly and Weekly Contests, showcasing expertise in competitive programming and data structures.',
      link: 'https://leetcode.com/Nirvana__Flame/'
    },
    {
      id: 3,
      title: 'Advanced Graph Theory',
      organization: 'NPTEL',
      date: '2022',
      description: 'Earned Silver Certificate in Advanced Graph Theory, demonstrating deep understanding of complex graph algorithms and their applications.',
      link: 'https://nptel.ac.in'
    },
    {
      id: 4,
      title: 'National Chess Championship',
      organization: 'SGFI',
      date: '2022',
      description: 'Represented Delhi State five times in National Chess Championship and secured a Bronze medal as Captain, with an International Chess FIDE Rating of 1627.',
      link: 'https://www.fide.com'
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
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</h1>
          <p className="text-lg text-gray-300">
            Recognition of my achievements in competitive programming, technical expertise, and chess.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 text-white">{achievement.title}</h3>
                  <p className="text-blue-400 font-medium">{achievement.organization}</p>
                  <p className="text-gray-400 text-sm">{achievement.date}</p>
                </div>

                <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'System Architecture',
              'Database Design',
              'Payment Systems',
              'Performance Optimization',
              'Competitive Programming',
              'Algorithm Design',
              'Problem Solving',
              'Technical Leadership'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
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