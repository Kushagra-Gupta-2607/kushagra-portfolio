import React from 'react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              I'm currently working on sharing my thoughts and experiences about software development, 
              system architecture, and performance optimization. Stay tuned for insightful articles!
            </p>
            <div className="flex justify-center">
              <div className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-sm font-medium">
                Under Development
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 