import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../componet/DarkModeContext';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Restaurant Website",
    description: "A fully responsive restaurant website with online ordering system and email confirmations.",
    technologies: ["React", "TypeScript", "Tailwind CSS"," React Router","Firebase Authentication"],
    liveLink: "https://modern-kiln-403014.web.app/",
    imageUrl: "https://i.postimg.cc/YS9Ty7MY/screenshot-1739725437410.png",
  },
  {
    title: "E-commerce Platform",
    description: "Complete e-commerce solution with product management and secure checkout.",
    technologies: ["React", "TypeScript", "Tailwind CSS"," React Router","Firebase Authentication"],
    liveLink: "https://eighth-facet-436813-u8.web.app/",
    imageUrl: "https://i.postimg.cc/cCqjH8YB/screenshot-1734877975723.png",
  },
  {
    title: "Country Search App",
    description: "Interactive application to search for countries and view detailed information.",
    technologies: ["React", "TypeScript", "Tailwind CSS"," React Router","Firebase Authentication"],
    liveLink: "https://country-searching-77c0f.web.app/",
    imageUrl: "https://i.postimg.cc/CxKvw4XV/Screenshot-23-12-2024-165050-country-searching-77c0f-web-app.jpg",
  },
  {
    title: "Admin Dashboard",
    description: "Comprehensive dashboard for data visualization and management.",
    technologies: ["React", "Chart.js"," React Router"],
    liveLink: "https://dashboard-1ff6f.web.app/",
    imageUrl: "https://i.postimg.cc/xTBkdfFT/Screenshot-7-3-2025-215615-dashboard-1ff6f-web-app.jpg",
  },
];

const FullCardHoverCarousel: React.FC = () => {
  const { darkMode } = useDarkMode();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  

  // Detect mobile screen
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }, isMobile ? 3000 : 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isMobile]);

  // Card positioning with responsive size
  const getCardPosition = (index: number) => {
    if (isMobile) {
      // في شاشات الهاتف: إظهار الكارت النشط فقط وإخفاء الباقي
      return {
        x: 0,
        y: 0,
        z: 0,
        rotateY: 0,
        scale: index === activeIndex ? 1 : 0,
        opacity: index === activeIndex ? 1 : 0,
        zIndex: index === activeIndex ? 10 : 0,
        filter: 'none',
        display: index === activeIndex ? 'block' : 'none'
      };
    } else {
      // Desktop circular layout
      const angle = (index - activeIndex) * (360 / projects.length);
      const radius = window.innerWidth < 1024 ? 300 : 450;
      
      return {
        x: Math.sin(angle * Math.PI / 180) * radius,
        z: -Math.cos(angle * Math.PI / 180) * radius,
        rotateY: angle,
        scale: index === activeIndex ? 1.15 : 0.85,
        opacity: index === activeIndex ? 1 : 0.6,
        zIndex: index === activeIndex ? 20 : 1,
        filter: index === activeIndex ? 'none' : 'brightness(0.7)'
      };
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7, x: isMobile ? 0 : 0 },
    visible: (position: any) => ({
      opacity: position.opacity,
      scale: position.scale,
      x: position.x,
      y: position.y,
      z: position.z,
      rotateY: position.rotateY,
      zIndex: position.zIndex,
      filter: position.filter,
      display: position.display || 'block',
      transition: { 
        type: "spring", 
        stiffness: isMobile ? 100 : 120,
        damping: isMobile ? 20 : 25,
        mass: 1.5
      }
    })
  };

  // Responsive card dimensions
  const cardWidth = isMobile ? Math.min(window.innerWidth * 0.9, 400) : 450;
  const cardHeight = isMobile ? cardWidth * 1.1 : 600;

  const handleCardClick = (index: number, project: Project) => {
    if (isMobile) {
      // On mobile: directly open modal for the clicked card
      setSelectedProject(project);
      setIsPlaying(false);
    } else {
      // On desktop: original behavior
      if (index === activeIndex) {
        setIsPlaying(false);
        setSelectedProject(project);
      }
    }
  };

  const navigate = (newIndex: number) => {
    setActiveIndex(newIndex);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 6000);
  };

  return (
    <div id="portfolio" className={`flex flex-col items-center min-h-screen py-8 md:py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="w-full max-w-7xl px-4">
        <h1 className={`text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          My Projects 
        </h1>
        
        <div className={`relative ${isMobile ? 'h-[400px]' : 'h-[800px]'} w-full perspective-1200 overflow-visible`}>
          {projects.map((project, index) => {
            const position = getCardPosition(index);
            
            return (
              <motion.div
                key={index}
                custom={position}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className={`absolute top-1/2 left-1/2 rounded-2xl shadow-xl cursor-pointer overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformOrigin: 'center center',
                  marginLeft: `-${cardWidth/2}px`,
                  marginTop: `-${cardHeight/2}px`,
                  willChange: 'transform'
                }}
                onClick={() => handleCardClick(index, project)}
                onHoverStart={() => !isMobile && setHoveredIndex(index)}
onHoverEnd={() => !isMobile && setHoveredIndex(null)}
                whileHover={!isMobile ? { scale: 1.05 } : {}}
              >
                     <div className={`absolute inset-0 bg-gray-500 bg-opacity-90 flex items-center justify-center 
                                transition-opacity duration-300 z-10
                                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <h2 className={`text-3xl font-bold text-white text-center px-4`}>
                    {project.title}
                  </h2>
                </div>
                <div className={`${isMobile ? 'h-40' : 'h-72'} overflow-hidden`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className={`flex-1 ${isMobile ? 'p-4' : 'p-8'} flex flex-col`}>
                  <h2 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 md:mb-4`}>
                    {project.title}
                  </h2>
                  
                  <p className={`flex-1 ${isMobile ? 'text-xs' : 'text-base'} ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 md:mb-6`}>
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {project.technologies.slice(0, isMobile ? 2 : 3).map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs ${isMobile ? 'px-2 py-1' : 'px-3 py-1.5'} rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 md:mt-16 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => navigate(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? (darkMode ? 'bg-white w-8' : 'bg-blue-500 w-8') : (darkMode ? 'bg-gray-600' : 'bg-gray-300')}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 md:p-8 max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh] relative shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 md:top-6 right-4 md:right-6 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'} text-2xl md:text-3xl`}
                aria-label="Close modal"
              >
                &times;
              </button>
              
              <div className="space-y-6 md:space-y-8">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                  loading="lazy"
                />
                
                <h2 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProject.title}
                </h2>
                
                <p className={`text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProject.description}
                </p>
                
                <div>
                  <h3 className={`text-xl md:text-2xl font-semibold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium text-base md:text-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white text-center`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullCardHoverCarousel;