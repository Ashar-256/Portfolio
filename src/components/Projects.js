import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';

// Import local images
import DatingWebpage from '../images/projects/Dating-Webpage.png';
import Portfolio from '../images/projects/Portolio.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Dating Webpage',
      description: ' A concept landing page inspired by modern dating platforms, designed with HTML and CSS. Focused on layout structuring, typography, and visual styling to mimic real-world UI elements. Fully responsive and hosted with GitHub Pages.',
      image: DatingWebpage,
      technologies: ['CSS', 'HTML'],
      github: 'https://github.com/Ashar-256/Dating-Webpage',
      demo: 'https://ashar-256.github.io/Dating-Webpage/',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and interactive elements.',
      image: Portfolio,
      technologies: ['React', 'Framer Motion', 'CSS', 'HTML'],
      github: 'https://github.com/Ashar-256/Portfolio',
      demo: 'https://ashar-256.github.io/Portfolio/',
      category: 'frontend'
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechnologyIcon = (tech) => {
    const icons = {
      'React': <FaReact />,
      'JavaScript': <SiJavascript />,
      'Tailwind CSS': <SiTailwindcss />,
      'HTML': <SiHtml5 />,
      'CSS': <SiCss3 />,
    };
    return icons[tech] || null;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="projects-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <motion.div 
            className="projects-grid"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {getTechnologyIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .projects {
          padding: 5rem 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .projects-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-header {
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

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2rem;
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }

        .filter-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: #6366f1;
        }

        .filter-btn.active {
          background: #6366f1;
          color: white;
          border-color: #6366f1;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16/10;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: #6366f1;
          border-radius: 50%;
          color: white;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .project-link:hover {
          background: #8b5cf6;
          transform: scale(1.1);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #f8fafc;
        }

        .project-description {
          color: #94a3b8;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.2);
          color: #cbd5e1;
          border-radius: 1rem;
          font-size: 0.875rem;
        }

        .tech-tag svg {
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .filter-buttons {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.4rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
