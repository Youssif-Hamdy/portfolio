import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDarkMode } from '../componet/DarkModeContext';
import { FaReact, FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiTypescript, SiCplusplus } from 'react-icons/si';
import PersonalInfo from './PersonalInfo';

const About: React.FC = () => {
  const { darkMode } = useDarkMode();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div
      id="about"
      className={`flex items-center justify-center min-h-screen py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <motion.div
        className={`flex flex-col w-full max-w-6xl p-4 md:p-8 pt-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* About Me Title */}
        <motion.h1
          className={`text-4xl md:text-6xl font-bold text-center mb-8 md:mb-10 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          About Me
        </motion.h1>

        {/* Personal Info and Experience Boxes */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Personal Info Card */}
          <div className="w-full lg:w-1/2 h-full">
            <PersonalInfo darkMode={darkMode} />
          </div>

          {/* Experience Boxes */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Years of Experience */}
              <motion.div
                className={`w-full p-6 rounded-xl shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold">+2</h3>
                <p className="text-xl">Years of Experience</p>
              </motion.div>

              {/* Projects Completed */}
              <motion.div
                className={`w-full p-6 rounded-xl shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold">+6</h3>
                <p className="text-xl">Projects Completed</p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Frontend Frameworks */}
              <motion.div
                className={`w-full p-6 rounded-xl shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold">+4</h3>
                <p className="text-xl">Frontend Frameworks</p>
              </motion.div>

              {/* Problem Solving */}
              <motion.div
                className={`w-full p-6 rounded-xl shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold">+2</h3>
                <p className="text-xl">Years in Problem Solving</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className={`my-8 md:my-12 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />

        {/* Skills Section */}
        <div className="w-full" ref={ref}>
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My Skills
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            {/* JavaScript */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <FaJs className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </motion.div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full rounded-full"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: `conic-gradient(${darkMode ? '#4a5568' : '#cbd5e0'} 99%, ${darkMode ? '#2d3748' : '#e2e8f0'} 99% 100%)`,
                    }}
                  />
                  <motion.div
                    className={`absolute w-[85%] h-[85%] ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    } rounded-full flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-xl font-bold">99%</p>
                  </motion.div>
                </div>
              </div>
              <motion.p 
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                JavaScript
              </motion.p>
            </motion.div>

            {/* TypeScript */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <SiTypescript className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </motion.div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full rounded-full"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: `conic-gradient(${darkMode ? '#4a5568' : '#cbd5e0'} 99%, ${darkMode ? '#2d3748' : '#e2e8f0'} 99% 100%)`,
                    }}
                  />
                  <motion.div
                    className={`absolute w-[85%] h-[85%] ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    } rounded-full flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-xl font-bold">99%</p>
                  </motion.div>
                </div>
              </div>
              <motion.p 
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                TypeScript
              </motion.p>
            </motion.div>

            {/* React */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <FaReact className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </motion.div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full rounded-full"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: `conic-gradient(${darkMode ? '#4a5568' : '#cbd5e0'} 99%, ${darkMode ? '#2d3748' : '#e2e8f0'} 99% 100%)`,
                    }}
                  />
                  <motion.div
                    className={`absolute w-[85%] h-[85%] ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    } rounded-full flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-xl font-bold">99%</p>
                  </motion.div>
                </div>
              </div>
              <motion.p 
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                React
              </motion.p>
            </motion.div>

            {/* Python */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <FaPython className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </motion.div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full rounded-full"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: `conic-gradient(${darkMode ? '#4a5568' : '#cbd5e0'} 50%, ${darkMode ? '#2d3748' : '#e2e8f0'} 50% 100%)`,
                    }}
                  />
                  <motion.div
                    className={`absolute w-[85%] h-[85%] ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    } rounded-full flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-xl font-bold">50%</p>
                  </motion.div>
                </div>
              </div>
              <motion.p 
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Python
              </motion.p>
            </motion.div>

            {/* C++ */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <SiCplusplus className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </motion.div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full rounded-full"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: `conic-gradient(${darkMode ? '#4a5568' : '#cbd5e0'} 90%, ${darkMode ? '#2d3748' : '#e2e8f0'} 90% 100%)`,
                    }}
                  />
                  <motion.div
                    className={`absolute w-[85%] h-[85%] ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    } rounded-full flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-xl font-bold">90%</p>
                  </motion.div>
                </div>
              </div>
              <motion.p 
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                C++
              </motion.p>
            </motion.div>

            {/* Java */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <FaJava className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </motion.div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full rounded-full"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: `conic-gradient(${darkMode ? '#4a5568' : '#cbd5e0'} 40%, ${darkMode ? '#2d3748' : '#e2e8f0'} 40% 100%)`,
                    }}
                  />
                  <motion.div
                    className={`absolute w-[85%] h-[85%] ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    } rounded-full flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-xl font-bold">40%</p>
                  </motion.div>
                </div>
              </div>
              <motion.p 
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Java
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;