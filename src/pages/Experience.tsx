import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Convegenius",
      position: "Software Development Engineer 2",
      period: "Dec 2023 - Present",
      location: "Remote",
      description: [
        "Lead Engineer for Public Fund Management System (PFMS), a ₹20,000 Cr government initiative managing scholarship distribution for 12L+ students across Gujarat.",
        "Architected and engineered core payment lifecycle engine processing ₹425+ Cr in verified payments, with automated eligibility checks and bank validation.",
        "Built scalable backend systems for Child Tracking System (CTS) and Xamta, handling 5M+ records with real-time data synchronization and 99.9% uptime.",
        "Crafted high-performance reporting systems generating 22L+ reports, reducing report generation time by 75% through materialized views and enhanced database schemas."
      ],
      technologies: ["Node.js", "PostgreSQL", "MongoDB", "AWS", "REST APIs", "ETL", "Materialized Views"]
    },
    {
      id: 2,
      company: "BlogVault",
      position: "Software Engineer",
      period: "May 2023 - Nov 2023",
      location: "Bengaluru, India",
      description: [
        "Spearheaded Airlift plugin development, achieving 90% SEO improvement and 40% faster page load times through streamlined CSS, JavaScript, Fonts, and Images.",
        "Devised dynamic purge caching system reducing server load by 60% and improving website performance by 45% through intelligent cache management."
      ],
      technologies: ["PHP", "WordPress", "JavaScript", "CSS", "Caching", "Performance Optimization"]
    },
    {
      id: 3,
      company: "BlogVault",
      position: "Software Engineer Intern",
      period: "Feb 2023 - Apr 2023",
      location: "Bengaluru, India",
      description: [
        "Created Maintenance Mode plugin with 50K+ active installations, reducing support tickets by 30% through systematized downtime notifications.",
        "Designed Database Optimization plugin reducing database size by 40% and lowering hosting costs by 25% for 10K+ WordPress sites.",
        "Built WP-Comments plugin handling 1M+ comments monthly with 99.9% spam detection accuracy."
      ],
      technologies: ["PHP", "MySQL", "WordPress", "Database Optimization", "Plugin Development"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development, focusing on building scalable systems and optimizing performance.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 group hover:bg-blue-100 dark:hover:bg-gray-800/70 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {experience.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                    {experience.period} • {experience.location}
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 mb-6">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md text-xs bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400"
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