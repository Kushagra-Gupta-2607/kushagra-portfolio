import { motion } from 'framer-motion';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Tech Company A',
      position: 'Senior Software Engineer',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led a team of 5 developers in building a scalable microservices architecture',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 2,
      company: 'Startup B',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      location: 'Remote',
      description: [
        'Developed and maintained multiple web applications using modern frameworks',
        'Optimized database queries improving performance by 40%',
        'Collaborated with design team to implement responsive UI/UX'
      ],
      technologies: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'Redis']
    },
    {
      id: 3,
      company: 'Enterprise C',
      position: 'Software Developer',
      period: '2017 - 2019',
      location: 'New York, NY',
      description: [
        'Built RESTful APIs serving 1M+ daily requests',
        'Implemented automated testing reducing bug reports by 50%',
        'Participated in agile development processes'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'Docker']
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
          <h1 className="text-4xl font-bold mb-6">Experience</h1>
          <p className="text-lg text-gray-300">
            A timeline of my professional journey and key achievements in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2" />

              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm ml-8 md:ml-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm mt-2 md:mt-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 