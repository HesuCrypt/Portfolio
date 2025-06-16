import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Access Computer College',
      location: 'Apec New Manila',
      period: '2022 - Present',
      gwa: '92.48',
      status: 'Current',
      description: 'Pursuing comprehensive education in information technology with focus on web development, software engineering, and database management.',
      achievements: [
        'Maintained Dean\'s List status',
        'Completed capstone project with high distinction',
        'Active participation in programming competitions'
      ]
    },
    {
      degree: 'Senior High School',
      institution: 'Apec New Manila',
      location: 'Manila',
      period: '2019 - 2021',
      status: 'Completed',
      description: 'Completed senior high school education with strong foundation in mathematics, science, and technology.',
      achievements: [
        'Honor student throughout senior high',
        'Active in technology clubs',
        'Participated in programming workshops'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic foundation built through dedicated study and continuous learning 
            in the field of Information Technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ml-8 md:ml-0"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                          <GraduationCap size={20} className="text-white" />
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.status === 'Current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      {edu.gwa && (
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                            <Award size={14} />
                            <span>GWA</span>
                          </div>
                          <div className="text-2xl font-bold text-black">{edu.gwa}</div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <GraduationCap size={16} />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-black mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;