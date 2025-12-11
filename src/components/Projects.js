import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChromaGrid from './ChromaGrid';

// Import local images
import DatingWebpage from '../images/projects/Dating-Webpage.png';
import Portfolio from '../images/projects/Portolio.png';
import AutisMindAI from '../images/projects/AutisMindAI.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Dating Webpage',
      description: 'Concept landing page inspired by modern dating platforms.',
      image: DatingWebpage,
      technologies: ['CSS', 'HTML'],
      url: 'https://ashar-256.github.io/Dating-Webpage/',
      category: 'frontend',
      borderColor: '#f472b6',
      gradient: 'linear-gradient(145deg, #f472b6, #000)',
    },
    {
      id: 2,
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
      id: 3,
      title: 'AutisMind AI',
      description: 'AI-powered early autism risk assessment tool using computer vision and audio analysis.',
      image: AutisMindAI, // Using placeholder as requested
      technologies: ['React', 'TypeScript', 'Python', 'MediaPipe'],
      url: 'https://ashar-256.github.io/AutisMind-AI/',
      category: 'fullstack',
      borderColor: '#0ea5e9',
      gradient: 'linear-gradient(145deg, #0ea5e9, #000)',
    }
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

        <ChromaGrid
          items={filteredProjects}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>

      <style jsx>{`
        .projects {
          padding: 3rem 0;
          position: relative;
          /* Background handled by FaultyTerminal globally, but we can add overlay if needed */
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
