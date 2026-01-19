import './styles/global.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Dock from './components/Dock';
import FaultyTerminal from './components/FaultyTerminal';

import { VscHome, VscAccount, VscCode, VscTools, VscMail } from "react-icons/vsc";

import { useState, useEffect } from 'react';
// ... imports

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dockItems = [
    {
      icon: <VscHome size={24} />,
      label: 'Home',
      onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <VscAccount size={24} />,
      label: 'About',
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <VscCode size={24} />,
      label: 'Projects',
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <VscTools size={24} />,
      label: 'Skills',
      onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <VscMail size={24} />,
      label: 'Contact',
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
  ];

  return (
    <div className="App">
      {/* Global Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        {isMobile ? (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }} />
        ) : (
          <FaultyTerminal
            scanlineIntensity={0.1}
            glitchAmount={0.6}
            flickerAmount={0.3}
            brightness={2.1}
            tint="#1e293b"
          />
        )}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero isMobile={isMobile} />
        <About />
        <Projects isMobile={isMobile} />
        <Skills isMobile={isMobile} />
        <Contacts />
        <Footer />
      </div>

      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;
