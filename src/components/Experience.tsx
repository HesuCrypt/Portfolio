import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  status: 'Current' | 'Completed';
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'Prime Philippines',
      location: 'Philippines',
      period: '2025',
      type: 'Contract',
      status: 'Completed',
      description: 'Creating intuitive and visually appealing user interfaces and experiences for web applications. Collaborating with development teams to implement design systems and ensure consistent user experiences across platforms.',
      responsibilities: [
        'Design user interfaces for web applications using Figma',
        'Create wireframes, prototypes, and user journey maps',
        'Collaborate with developers to implement designs',
        'Conduct user research and usability testing',
        'Maintain design systems and style guides'
      ],
      achievements: [
        'Improved user engagement by 40% through redesigned interfaces',
        'Established comprehensive design system for consistent branding',
        'Reduced development time by 25% with detailed design specifications'
      ],
      skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      id: 2,
      title: 'Front End Developer',
      company: 'Prime Philippines',
      location: 'Philippines',
      period: '2025',
      type: 'Contract',
      status: 'Completed',
      description: 'Developing responsive and interactive web applications using modern frontend technologies. Working closely with design teams to bring user interfaces to life with clean, efficient code.',
      responsibilities: [
        'Develop responsive web applications using React and TypeScript',
        'Implement pixel-perfect designs from Figma mockups',
        'Optimize applications for performance and accessibility',
        'Collaborate with backend developers for API integration',
        'Write clean, maintainable code following best practices'
      ],
      achievements: [
        'Built 5+ responsive web applications with 99% uptime',
        'Improved page load speeds by 60% through optimization',
        'Mentored junior developers on React best practices'
      ],
      skills: ['React', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Responsive Design']
    }
  ];

  const getStatusColor = (status: Experience['status']): string => {
    switch (status) {
      case 'Current':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: Experience['type']): string => {
    switch (type) {
      case 'Full-time':
        return 'bg-black text-white';
      case 'Contract':
        return 'bg-gray-800 text-white';
      case 'Internship':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Internship Experience</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Internship experience in UI/UX design and frontend development, 
            creating impactful digital solutions for modern businesses.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="ml-12 md:ml-20 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                          <p className="text-lg text-gray-600 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users size={16} />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(exp.status)}`}>
                        {exp.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-black mb-4">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: respIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-4">Key Achievements:</h4>
                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div>
                        <h4 className="font-semibold text-black mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-black text-white text-sm rounded-md font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how I can contribute to your team's success.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;