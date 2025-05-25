import { motion } from 'framer-motion';

interface SkillGroup {
  category: string;
  items: string[];
}

interface WorkingStyleItem {
  title: string;
  description: string;
}

const About = () => {
  const skills: SkillGroup[] = [
    { 
      category: 'Languages', 
      items: ['JavaScript', 'SQL', 'Python', 'Ruby', 'PHP', 'C++'] 
    },
    { 
      category: 'Frameworks & Tools', 
      items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Git', 'REST APIs'] 
    },
    { 
      category: 'Databases', 
      items: ['PostgreSQL', 'MongoDB', 'Stored Procedures', 'Materialized Views', 'ETL'] 
    },
    { 
      category: 'Specializations', 
      items: ['System Architecture', 'Database Design', 'Payment Systems', 'Performance Optimization'] 
    },
  ];

  const workingStyles: WorkingStyleItem[] = [
    {
      title: 'System Architect',
      description: "I specialize in designing and implementing scalable systems that handle millions of records and complex business logic, with a focus on performance and reliability."
    },
    {
      title: 'Problem Solver',
      description: "I excel at breaking down complex problems into manageable solutions, whether it's optimizing database performance or architecting payment systems handling billions of rupees."
    },
    {
      title: 'Performance Optimizer',
      description: "I'm passionate about creating efficient solutions, from reducing database sizes by 40% to improving page load times by 40% through intelligent optimization techniques."
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            I'm a Software Development Engineer with a proven track record in building and scaling enterprise systems. 
            Currently at Convegenius, I lead the development of the Public Fund Management System (PFMS), 
            a ₹20,000 Cr government initiative managing scholarship distribution for 12L+ students across Gujarat.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With expertise in system architecture, database design, and performance optimization, 
            I specialize in creating robust solutions that handle complex business logic and massive scale. 
            My work has directly impacted millions of users and processed billions of rupees in transactions.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-600/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Working Style Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Working Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workingStyles.map((item) => (
              <div key={item.title} className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 