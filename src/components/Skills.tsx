import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Code, Palette, Database, Users, Clock, Target, MessageSquare, Lightbulb } from 'lucide-react';

interface TechSkill {
  name: string;
  level: number;
  icon: React.ElementType;
  description?: string;
}

interface SoftSkill {
  name: string;
  icon: React.ElementType;
  description?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const progressVariants: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: "easeOut" }
  })
};

const Skills: React.FC = () => {
  const techSkills = useMemo<TechSkill[]>(() => [
    { name: 'HTML', level: 95, icon: Code, description: 'Semantic HTML5 markup' },
    { name: 'CSS', level: 90, icon: Palette, description: 'Modern CSS3 with Flexbox and Grid' },
    { name: 'JavaScript', level: 85, icon: Code, description: 'ES6+ and modern JavaScript features' },
    { name: 'ReactJS', level: 80, icon: Code, description: 'React hooks and functional components' },
    { name: 'TypeScript', level: 75, icon: Code, description: 'Type-safe development' },
    { name: 'PHP', level: 80, icon: Database, description: 'Backend development' },
    { name: 'MySQL/SQL', level: 85, icon: Database, description: 'Database design and management' },
    { name: 'Figma', level: 90, icon: Palette, description: 'UI/UX design' },
    { name: 'Framer', level: 90, icon: Palette, description: 'Animation and prototyping' },
  ], []);

  const softSkills = useMemo<SoftSkill[]>(() => [
    { name: 'Teamwork', icon: Users, description: 'Collaborative problem-solving' },
    { name: 'Time Management', icon: Clock, description: 'Efficient project delivery' },
    { name: 'Leadership', icon: Target, description: 'Project and team leadership' },
    { name: 'Effective Communication', icon: MessageSquare, description: 'Clear and concise communication' },
    { name: 'Critical Thinking', icon: Lightbulb, description: 'Analytical problem-solving' },
  ], []);

  const renderSkillBar = (skill: TechSkill) => (
    <div 
      className="w-full bg-gray-200 rounded-full h-3" 
      role="progressbar" 
      aria-valuenow={skill.level} 
      aria-valuemin={0} 
      aria-valuemax={100}
    >
      <motion.div
        custom={skill.level}
        variants={progressVariants}
        className="bg-black h-3 rounded-full relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/20 to-transparent animate-pulse"></div>
      </motion.div>
    </div>
  );

  const renderSkillIcon = (Icon: React.ElementType, className: string) => (
    <div className={className} aria-hidden="true">
      <Icon size={16} className="text-white" />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through academic study 
            and practical experience in modern web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6" role="list" aria-label="Technical skills">
              {techSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group"
                  role="listitem"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {renderSkillIcon(skill.icon, "w-8 h-8 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300")}
                      <div>
                        <span className="font-semibold text-black">{skill.name}</span>
                        {skill.description && (
                          <p className="text-sm text-gray-500">{skill.description}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-600" aria-label={`${skill.level}% proficiency`}>
                      {skill.level}%
                    </span>
                  </div>
                  {renderSkillBar(skill)}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">
              Soft Skills
            </h3>
            <div className="grid gap-6" role="list" aria-label="Soft skills">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  role="listitem"
                >
                  <div className="flex items-center gap-4">
                    {renderSkillIcon(skill.icon, "w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-black group-hover:to-gray-800 transition-all duration-300")}
                    <div>
                      <h4 className="font-semibold text-lg text-black group-hover:text-gray-800 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      {skill.description && (
                        <p className="text-sm text-gray-500">{skill.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills Section */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-black text-white rounded-xl"
            >
              <h4 className="font-bold text-lg mb-4">Additional Expertise</h4>
              <ul className="space-y-2 text-gray-300" role="list">
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