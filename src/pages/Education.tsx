import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa: string;
  achievements: string[];
  relevantCourses: string[];
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      institution: "Jaypee Institute of Information Technology",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      period: "2019 - 2023",
      location: "Noida, India",
      gpa: "7.8",
      achievements: [
        "Secured ranks of 538, 726, and 763 in Codeforces Division 2 contests",
        "Achieved Knight rank on LeetCode with ranks of 289 and 1044 in Biweekly and Weekly Contests",
        "Advanced Graph Theory (Silver Certificate) by NPTEL",
        "Represented Delhi State in National Chess Championship and secured Bronze medal as Captain"
      ],
      relevantCourses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Machine Learning",
        "Artificial Intelligence",
        "Blockchain Technology"
      ]
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
            Education
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and achievements in computer science and competitive programming.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 group hover:bg-blue-100 dark:hover:bg-gray-800/70 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.degree} in {edu.field}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                    {edu.period} • {edu.location}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    GPA: {edu.gpa}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Relevant Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md text-xs bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 