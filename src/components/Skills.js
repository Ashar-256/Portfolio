import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaPython, FaGitAlt, FaGithubAlt, FaBrain } from 'react-icons/fa';
import { SiJavascript, SiCanva, SiCss3, SiC, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaReact />,
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <FaPython /> },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <FaGitAlt />,
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithubAlt /> },
        { name: 'Canva', icon: <SiCanva /> },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={categoryVariants} className="skills-header">
            <h2 className="section-title">Technical Skills</h2>
            {/* <p className="section-subtitle">
              Technologies and tools I work with to build amazing applications
            </p> */}
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={categoryVariants}
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="skills-summary"
            variants={categoryVariants}
          >
            <h3>Continuous Learning</h3>
            <p>
              I'm always eager to learn new technologies and improve my skills.
              Currently exploring React.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills {
          padding: 5rem 0;
          /* background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); */
        }

        .skills-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-header {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skill-category {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .category-icon {
          font-size: 2rem;
          color: #6366f1;
        }

        .category-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #f8fafc;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1.25rem;
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: default;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          border-color: #6366f1;
        }

        .skill-icon {
          font-size: 1.5rem;
          color: #6366f1;
          display: flex; /* Fix alignment */
        }

        .skill-name {
          font-weight: 500;
          color: #f8fafc;
        }

        .skills-summary {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skills-summary h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .skills-summary p {
          color: #94a3b8;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .skill-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .skill-header {
            min-width: auto;
          }

          .skill-bar {
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
