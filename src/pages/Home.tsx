import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="gradient-text mb-6">
            Hi, I'm <span className="text-primary">Kushagra Gupta</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Software Engineer (Backend Specialist)
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            I design scalable systems, craft robust APIs, and manage high-performance databases using PostgreSQL, AWS, and modern backend tools.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="gradient-text mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate developer with a strong focus on creating exceptional
              user experiences. With expertise in both frontend and backend development,
              I bring ideas to life using modern technologies and best practices.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in software development started with a curiosity for building
              things that make a difference. Today, I specialize in creating scalable
              web applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/blog" className="btn btn-secondary">
                Read My Blog
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 animate-float" />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="card h-full group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Project Title
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'TypeScript', 'Node.js'].map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md text-xs bg-secondary/10 text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                    <a
                      href="#"
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 