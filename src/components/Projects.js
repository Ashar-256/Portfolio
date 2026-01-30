import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChromaGrid from './ChromaGrid';

// Import local images
import DatingWebpage from '../images/projects/Dating-Webpage.png';
import Portfolio from '../images/projects/Portfolio.png';
import AutisMindAI from '../images/projects/AutisMindAI.png';
import ChaiCulture from '../images/projects/ChaiCulture.png';

const Projects = ({ isMobile }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'The very site you are on right now ;)',
      image: Portfolio,
      technologies: ['React', 'Framer Motion'],
      url: 'https://ashar-256.github.io/Portfolio/',
      category: 'frontend',
      borderColor: '#6366f1',
      gradient: 'linear-gradient(145deg, #6366f1, #000)',
    },
    {
      id: 2,
      title: 'AutisMind AI',
      description: 'AI-powered early autism risk assessment tool using computer vision and audio analysis.',
      image: AutisMindAI, // Using placeholder as requested
      technologies: ['React', 'TypeScript', 'Python', 'MediaPipe'],
      url: 'https://ashar-256.github.io/AutisMind-AI/',
      category: 'fullstack',
      borderColor: '#0ea5e9',
      gradient: 'linear-gradient(145deg, #0ea5e9, #000)',
    },
    {
      id: 3,
      title: 'Chai Culture',
      description: 'A "Coming Soon" landing page made for an assignment.',
      image: ChaiCulture,
      technologies: ['React', 'Vite', 'Vanilla CSS'],
      url: 'https://ashar-256.github.io/ChaiCulture/',
      category: 'frontend',
      borderColor: '#A65210',
      gradient: 'linear-gradient(145deg, #A65210, #000)',
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container" style={{ position: 'relative', minHeight: '400px' }}>
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcase of my recent work
          </p>
        </motion.div>

        {/* Filters could be re-enabled if needed, but ChromaGrid handles display nicely. 
            For now, let's keep it simple with just the grid. */}

        {isMobile ? (
          <div className="mobile-projects-list">
            {filteredProjects.map((project) => (
              <div key={project.id} className="mobile-project-card" style={{ borderColor: project.borderColor }}>
                <img src={project.image} alt={project.title} className="mobile-project-image" />
                <h3 className="mobile-project-title">{project.title}</h3>
                <p className="mobile-project-description">{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.technologies.map(tech => (
                    <span key={tech} className="mobile-project-tech">{tech}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mobile-project-link">
                  View Project
                </a>
              </div>
            ))}
          </div>
        ) : (
          <ChromaGrid
            items={filteredProjects}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        )}
      </div>

      <style jsx>{`
        .projects {
          padding: 3rem 0;
          position: relative;
          /* Background handled by FaultyTerminal globally, but we can add overlay if needed */
        }
        
        .mobile-projects-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 0 1rem;
        }

        .mobile-project-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          color: #fff;
        }

        .mobile-project-image {
          width: 100%;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          object-fit: cover;
        }

        .mobile-project-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #f8fafc;
        }

        .mobile-project-description {
          color: #94a3b8;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .mobile-project-tech {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          color: #cbd5e1;
        }

        .mobile-project-link {
          display: inline-block;
          background: #6366f1;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          margin-top: 1rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default Projects;
