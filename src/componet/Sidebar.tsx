import React, { useState } from 'react';
import { FaSun, FaMoon, FaHome, FaUser, FaEnvelope, FaFolder, FaBars, FaTimes } from 'react-icons/fa';
import { useDarkMode } from './DarkModeContext';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  scrollToSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ scrollToSection }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* زر القائمة في الشاشات الصغيرة */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 p-2 rounded-full ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } shadow-lg hover:bg-opacity-80 transition-all duration-300 md:hidden z-50 fixed`} // أضف relative هنا
      >
        {/* أيقونة الإغلاق (FaTimes) */}
        <motion.div
          key="close"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center" // تعديل هنا
        >
          <FaTimes className="w-5 h-5" />
        </motion.div>

        {/* أيقونة القائمة (FaBars) */}
        <motion.div
          key="open"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center" // تعديل هنا
        >
          <FaBars className="w-5 h-5" />
        </motion.div>
      </button>

      {/* Sidebar للشاشات الصغيرة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 w-full h-16 flex items-center justify-center space-x-6 ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            } shadow-lg z-40 md:hidden`}
          >
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              } shadow-lg hover:bg-opacity-80 transition-all duration-300`}
            >
              {darkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
            </button>

            {/* Home Icon */}
            <div
              className={`p-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
            >
              <FaHome
                className={`w-6 h-6 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                } hover:text-gray-500 transition-all duration-300`}
                onClick={() => {
                  scrollToSection('home');
                  setIsOpen(false);
                }}
              />
            </div>

            {/* About Icon */}
            <div
              className={`p-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
            >
              <FaUser
                className={`w-6 h-6 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                } hover:text-gray-500 transition-all duration-300`}
                onClick={() => {
                  scrollToSection('about');
                  setIsOpen(false);
                }}
              />
            </div>

            {/* Portfolio Icon */}
            <div
              className={`p-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
            >
              <FaFolder
                className={`w-6 h-6 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                } hover:text-gray-500 transition-all duration-300`}
                onClick={() => {
                  scrollToSection('portfolio');
                  setIsOpen(false);
                }}
              />
            </div>

            {/* Contact Icon */}
            <div
              className={`p-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
            >
              <FaEnvelope
                className={`w-6 h-6 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                } hover:text-gray-500 transition-all duration-300`}
                onClick={() => {
                  scrollToSection('gettouch');
                  setIsOpen(false);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar للشاشات الكبيرة */}
      <div
        className={`hidden md:flex fixed top-0 right-2 h-screen w-12 flex-col items-center justify-center space-y-3 p-2 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } z-40`}
      >
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
          } shadow-lg hover:bg-opacity-80 transition-all duration-300`}
        >
          {darkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
        </button>

        {/* Home Icon */}
        <div
          className={`p-2 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
        >
          <FaHome
            className={`w-6 h-6 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-500 transition-all duration-300`}
            onClick={() => scrollToSection('home')}
          />
        </div>

        {/* About Icon */}
        <div
          className={`p-2 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
        >
          <FaUser
            className={`w-6 h-6 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-500 transition-all duration-300`}
            onClick={() => scrollToSection('about')}
          />
        </div>

        {/* Portfolio Icon */}
        <div
          className={`p-2 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
        >
          <FaFolder
            className={`w-6 h-6 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-500 transition-all duration-300`}
            onClick={() => scrollToSection('portfolio')}
          />
        </div>

        {/* Contact Icon */}
        <div
          className={`p-2 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
        >
          <FaEnvelope
            className={`w-6 h-6 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-500 transition-all duration-300`}
            onClick={() => scrollToSection('gettouch')}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;