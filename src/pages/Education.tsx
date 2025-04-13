import { motion } from 'framer-motion';

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa?: string;
  achievements?: string[];
  relevantCourses?: string[];
}

const Education = () => {
  const education: Education[] = [
    {
      id: 1,
      institution: 'University of Technology',
      degree: 'Master of Science',
      field: 'Computer Science',
      period: '2015 - 2017',
      location: 'San Francisco, CA',
      gpa: '3.8/4.0',
      achievements: [
        'Graduated with Distinction',
        'Research Assistant in Machine Learning Lab',
        'Published 2 papers in IEEE conferences'
      ],
      relevantCourses: [
        'Advanced Algorithms',
        'Distributed Systems',
        'Machine Learning',
        'Cloud Computing'
      ]
    },
    {
      id: 2,
      institution: 'State University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      period: '2011 - 2015',
      location: 'New York, NY',
      gpa: '3.7/4.0',
      achievements: [
        "Dean's List (All Semesters)",
        'Computer Science Department Award',
        'Hackathon Winner (2014)'
      ],
      relevantCourses: [
        'Data Structures',
        'Operating Systems',
        'Database Systems',
        'Software Engineering',
        'Web Development'
      ]
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
          <h1 className="text-4xl font-bold mb-6">Education</h1>
          <p className="text-lg text-gray-300">
            My academic journey and achievements in computer science.
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{edu.institution}</h3>
                  <p className="text-blue-400 text-lg">{edu.degree} in {edu.field}</p>
                </div>
                <div className="text-gray-400 text-sm mt-2 md:mt-0">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>

              {edu.achievements && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.relevantCourses && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map(course => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 