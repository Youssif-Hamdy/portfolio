import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../componet/DarkModeContext';
import About from './About';
import Sidebar from '../componet/Sidebar';
import Portfolio from './Portfoilo';
import GetTouch from './GetTouch';

const Home: React.FC = () => {
  const { darkMode } = useDarkMode();
  const [profileImage, setProfileImage] = useState(
    darkMode
      ? 'https://i.postimg.cc/76Bb70w0/Whats-App-Image-2025-03-08-at-1-15-16-AM.jpg'
      : 'https://i.postimg.cc/jSFhtwGg/Whats-App-Image-2025-03-07-at-10-43-44-PM.jpg'
  );

  useEffect(() => {
    setProfileImage(
      darkMode
        ? 'https://i.postimg.cc/76Bb70w0/Whats-App-Image-2025-03-08-at-1-15-16-AM.jpg'
        : 'https://i.postimg.cc/jSFhtwGg/Whats-App-Image-2025-03-07-at-10-43-44-PM.jpg'
    );
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Sidebar */}
      <div style={{ zIndex: 100 }}>
        <Sidebar scrollToSection={scrollToSection} />
      </div>

      {/* Home Section */}
      <div
        id="home"
        className={`flex items-center justify-center h-screen relative overflow-hidden ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            background: darkMode
              ? 'linear-gradient(135deg, rgba(17, 24, 39, 1), rgba(31, 41, 55, 1))'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(240, 240, 240, 1))',
            clipPath: darkMode
              ? 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)'
              : 'polygon(0 0, 100% 0, 100% 70%, 60% 100%, 0 70%)',
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Additional moving layer */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              background: darkMode
                ? 'linear-gradient(45deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))'
                : 'linear-gradient(45deg, rgba(200, 200, 200, 0.9), rgba(230, 230, 230, 0.9))',
              clipPath: darkMode
                ? 'polygon(0 0, 100% 0, 100% 60%, 40% 100%, 0 60%)'
                : 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)',
            }}
            initial={{ x: -100, y: -100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          ></motion.div>
        </motion.div>

        {/* Blur layer */}
        <div
          className="absolute inset-0 w-full h-full backdrop-blur-sm"
          style={{
            backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          }}
        ></div>

        {/* Content */}
        <motion.div
          className={`flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-20 p-8 pt-2${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 10 }}
        >
          {/* Image */}
          <motion.div
            className="relative w-40 h-40 md:w-96 md:h-130 overflow-hidden rounded-full md:rounded-2xl shadow-2xl mt-[8rem] md:mt-[4rem] "
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={profileImage}
                src={profileImage}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-full md:rounded-2xl"
                style={{ width: '110%', height: '110%' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className={`text-4xl md:text-7xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Youssif Hamdy
            </motion.h1>
            <motion.p
              className={`text-2xl md:text-4xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              } mt-6`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Front-End Developer
            </motion.p>
            <motion.p
              className={`text-lg md:text-2xl pb-25 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              } mt-8 max-w-2xl`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Passionate about building excellent software that improves the lives
              of those around me. I specialize in creating responsive, user-friendly
              web applications using modern technologies like React, TailwindCSS,
              and TypeScript. Let's work together to bring your ideas to life.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <About />
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 my-8"></div>
      </div>

      {/* Portfolio Section */}
      <Portfolio />
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 my-8"></div>
      </div>

      {/* Get in Touch Section */}
      <GetTouch />

      {/* Simple Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} Youssif Hamdy. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/Youssif-Hamdy" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/youssif-hamdy100/" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
        
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;