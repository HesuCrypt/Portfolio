import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Wrench, Users, Clock, Target, MessageSquare, Lightbulb } from 'lucide-react';

const Skills = () => {
  const techSkills = [
    { name: 'HTML', level: 95, icon: Code },
    { name: 'CSS', level: 90, icon: Palette },
    { name: 'JavaScript', level: 85, icon: Code },
    { name: 'ReactJS', level: 80, icon: Code },
    { name: 'TypeScript', level: 75, icon: Code },
    { name: 'PHP', level: 80, icon: Database },
    { name: 'MySQL/SQL', level: 85, icon: Database },
    { name: 'Figma', level: 90, icon: Palette },
    { name: 'Framer', level: 75, icon: Palette },
  ];

  const softSkills = [
    { name: 'Teamwork', icon: Users },
    { name: 'Time Management', icon: Clock },
    { name: 'Leadership', icon: Target },
    { name: 'Effective Communication', icon: MessageSquare },
    { name: 'Critical Thinking', icon: Lightbulb },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through academic study 
            and practical experience in modern web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <skill.icon size={16} className="text-white" />
                      </div>
                      <span className="font-semibold text-black">{skill.name}</span>
                    </div>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black h-3 rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">
              Soft Skills
            </h3>
            <div className="grid gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-black group-hover:to-gray-800 transition-all duration-300">
                      <skill.icon size={20} className="text-black group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-lg text-black group-hover:text-gray-800 transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-black text-white rounded-xl"
            >
              <h4 className="font-bold text-lg mb-4">Additional Expertise</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Web Development & Responsive Design</li>
                <li>• UI/UX Design Principles</li>
                <li>• Database Design & Management</li>
                <li>• Version Control (Git)</li>
                <li>• Agile Development Methodologies</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;