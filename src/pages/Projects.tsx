import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Public Fund Management System (PFMS)",
      description: "Led development of a comprehensive fund management system for government schools, handling ₹1000+ crores annually. Implemented automated eligibility checks and bank validation.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "web",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Child Tracking System (CTS)",
      description: "Built a real-time tracking system for 1M+ students across 1000+ schools with 99.9% uptime. Implemented real-time data synchronization and automated reporting.",
      technologies: ["React", "Node.js", "MongoDB", "Redis"],
      category: "web",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Database Optimization Plugin",
      description: "Developed a plugin that reduced database query time by 40% and improved overall system performance. Implemented intelligent caching and query optimization.",
      technologies: ["PHP", "MySQL", "Redis", "Docker"],
      category: "web",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Image Enhancement and Super Resolution",
      description: "Enhanced image quality by 300% using bicubic interpolation, SR-CNN, and SR-GAN techniques. Accelerated processing time by 40% through refined architecture.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
      category: "ai",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Blockchain Based Voting System",
      description: "Created a proof-of-concept voting system with 100% test coverage, supporting 100+ concurrent users. Engineered smart contracts with 256-bit encryption.",
      technologies: ["Solidity", "Web3", "Flask", "JavaScript"],
      category: "blockchain",
      link: "#",
      github: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in various technologies and domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-blue-50 dark:bg-gray-800/50 text-blue-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 h-full group hover:bg-blue-100 dark:hover:bg-gray-800/70 transition-colors shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400">
                    {categories.find(c => c.id === project.category)?.name}
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
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-md"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-sm font-medium"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 