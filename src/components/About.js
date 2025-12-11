import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const timeline = [
    {
      year: '2025',
      title: 'Learning & Building',
      description: 'Learning about Front End Development, interactive applications, and currently building modern web applications with React, focusing on creating responsive and user-friendly interfaces.',
      icon: <FaCode />,
    },
    {
      year: '2024',
      title: 'Computer Science Student',
      description: 'Currently pursuing Bachelor\'s degree with specialization in blockchain Technology with expected graduation in 2028.',
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-header">
            <h2 className="section-title">About Me</h2>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <h3>Hello, I'm a Front End Developer</h3>
              <p>
                Aspiring frontend developer with a strong foundation in HTML, CSS, and JavaScript.
                Passionate about building interactive and responsive web applications.
                Eager to contribute and learn in a collaborative, professional environment.
              </p>
              <p>
                When I'm not coding, you can find me playing games, reading novels, sketching.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-timeline">
              <h3>My Journey</h3>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          padding: 5rem 0;
          /* background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); */
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .about-text h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .about-text p {
          color: #cbd5e1;
          margin-bottom: 1rem;
          line-height: 1.7;
        }

        .about-timeline h3 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: #f8fafc;
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 0.75rem;
          border-left: 3px solid #6366f1;
        }

        .timeline-icon {
          font-size: 1.5rem;
          color: #6366f1;
          margin-top: 0.25rem;
        }

        .timeline-content {
          flex: 1;
        }

        .timeline-year {
          font-size: 0.875rem;
          color: #6366f1;
          font-weight: 600;
        }

        .timeline-content h4 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          color: #f8fafc;
        }

        .timeline-content p {
          color: #94a3b8;
          line-height: 1.6;
        }

        .about-skills h3 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: #f8fafc;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 600;
          color: #f8fafc;
        }

        .skill-level {
          color: #6366f1;
          font-weight: 600;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
