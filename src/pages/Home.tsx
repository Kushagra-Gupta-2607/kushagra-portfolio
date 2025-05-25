import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: "Public Fund Management System (PFMS)",
      description: "Led development of a comprehensive fund management system for government schools, handling ₹1000+ crores annually.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "#",
      github: "#"
    },
    {
      title: "Child Tracking System (CTS)",
      description: "Built a real-time tracking system for 1M+ students across 1000+ schools with 99.9% uptime.",
      technologies: ["React", "Node.js", "MongoDB", "Redis"],
      link: "#",
      github: "#"
    },
    {
      title: "Database Optimization Plugin",
      description: "Developed a plugin that reduced database query time by 40% and improved overall system performance.",
      technologies: ["PHP", "MySQL", "Redis", "Docker"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm <span className="text-gray-900 dark:text-white">Kushagra Gupta</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700 dark:text-gray-300">
            Software Engineer & System Architect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I specialize in building scalable systems, optimizing database performance, and crafting robust APIs. 
            With expertise in PostgreSQL, AWS, and modern backend technologies, I create solutions that handle millions of users.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/projects" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate software engineer with a strong focus on system architecture and performance optimization. 
              With experience at companies like Convegenius and BlogVault, I've built and scaled systems that handle millions of users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Beyond coding, I'm an avid competitive programmer, achieving ranks of 538, 726, and 763 in Codeforces Division 2 contests. 
              I also represent Delhi State in chess and have secured a Bronze medal as Captain in the National Championship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/blog" 
                className="px-6 py-3 bg-blue-50 dark:bg-gray-800/50 text-blue-700 dark:text-gray-300 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                Read My Blog
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20 animate-float shadow-lg" />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in system architecture and performance optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 h-full group hover:bg-blue-100 dark:hover:bg-gray-800/70 transition-colors shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400">
                    Featured
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md text-xs bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-md"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-sm font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg"
          >
            View All Projects
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 