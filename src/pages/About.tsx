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
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'Django'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'] },
    { category: 'DevOps', items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'] },
  ];

  const workingStyles: WorkingStyleItem[] = [
    {
      title: 'Problem Solver',
      description: "I approach challenges with a systematic mindset, breaking down complex problems into manageable solutions."
    },
    {
      title: 'Team Player',
      description: "I thrive in collaborative environments, effectively communicating and contributing to team success."
    },
    {
      title: 'Continuous Learner',
      description: "I'm constantly exploring new technologies and best practices to stay at the forefront of development."
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
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-300 mb-4">
            I'm a passionate Software Engineer with a strong foundation in full-stack development
            and a keen eye for creating elegant solutions to complex problems.
          </p>
          <p className="text-lg text-gray-300">
            With a background in computer science and years of hands-on experience,
            I specialize in building scalable web applications and microservices
            that make a real impact.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
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
          <h2 className="text-3xl font-bold mb-8">Working Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workingStyles.map((item) => (
              <div key={item.title} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 