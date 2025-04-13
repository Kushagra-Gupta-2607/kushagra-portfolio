import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    description: "An intelligent tool that helps developers review code more efficiently using machine learning algorithms.",
    technologies: ["React", "TypeScript", "Python", "TensorFlow"],
    image: "/projects/code-review.jpg",
    link: "https://code-review-ai.com",
    github: "https://github.com/username/code-review-ai",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Real-time Collaboration Platform",
    description: "A platform that enables real-time collaboration for teams, with features like document editing and video calls.",
    technologies: ["Next.js", "WebRTC", "Socket.io", "MongoDB"],
    image: "/projects/collab-platform.jpg",
    link: "https://collab-platform.com",
    github: "https://github.com/username/collab-platform",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Smart Home Automation System",
    description: "An IoT-based home automation system that controls various home devices through a mobile app.",
    technologies: ["React Native", "Node.js", "MQTT", "AWS"],
    image: "/projects/smart-home.jpg",
    link: "https://smart-home-app.com",
    github: "https://github.com/username/smart-home",
    category: "IoT"
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "A comprehensive dashboard for visualizing complex data sets with interactive charts and graphs.",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    image: "/projects/data-viz.jpg",
    link: "https://data-viz-dashboard.com",
    github: "https://github.com/username/data-viz",
    category: "Data Science"
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="gradient-text mb-4">Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work and personal projects. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary bg-opacity-10 text-secondary hover:bg-opacity-20'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card h-full group">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-md text-xs bg-secondary/10 text-secondary"
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
                        className="btn btn-primary"
                      >
                        View Project
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects; 