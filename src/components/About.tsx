import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '92.18', label: 'GWA', icon: Target },
    { number: '2+', label: 'Years Experience', icon: Heart },
    { number: '10+', label: 'Tech Skills', icon: User },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate Technology Professional
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a dedicated Information Technology student with a strong passion for 
              web development and UI/UX design. My journey in technology has been driven 
              by curiosity and a desire to create meaningful digital experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Currently pursuing my Bachelor's degree with an impressive GWA of 92.18, 
              I combine academic excellence with practical skills in modern web technologies. 
              I believe in continuous learning and staying updated with the latest industry trends.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map(({ number, label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <Icon size={24} className="text-black" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-black mb-2">{number}</div>
                  <div className="text-gray-600 text-sm">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12">
              <h4 className="text-xl font-bold mb-6">Core Values</h4>
              <div className="space-y-6">
                {[
                  {
                    title: 'Innovation',
                    description: 'Always seeking creative solutions to complex problems'
                  },
                  {
                    title: 'Quality',
                    description: 'Committed to delivering excellence in every project'
                  },
                  {
                    title: 'Growth',
                    description: 'Continuously learning and adapting to new technologies'
                  },
                  {
                    title: 'Collaboration',
                    description: 'Working effectively with teams to achieve common goals'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-black pl-4"
                  >
                    <h5 className="font-semibold text-black mb-1">{value.title}</h5>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;