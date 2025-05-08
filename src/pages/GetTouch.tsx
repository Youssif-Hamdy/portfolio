import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useDarkMode } from '../componet/DarkModeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetTouch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const { darkMode } = useDarkMode();
  // @ts-ignore

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      subject,
      text,
    };

    try {
      const response = await fetch('https://emailapi-production-3a8c.up.railway.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError);
        throw new Error('Invalid JSON response from server');
      }

      console.log(result);
      toast.success('Message sent successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setName('');
      setEmail('');
      setSubject('');
      setText('');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <motion.div
      id="gettouch"
      className={`flex flex-col items-center justify-center pt-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 mt-8">
        <motion.div
          className="w-full md:w-1/2 pr-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="mt-4 text-lg text-center md:text-left">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="mt-6 text-left space-y-4">
            <div className="flex flex-col space-y-4">
              <p className="text-lg">
                <strong>Mail me:</strong> 
                <a
                  href="mailto:youssifhamdy381@gmail.com"
                  className={`flex items-center hover:text-gray-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <FaEnvelope className="mr-2" /> youssifhamdy381@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <strong>Call me:</strong> 
                <a
                  href="tel:01208955733"
                  className={`flex items-center hover:text-gray-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <FaPhone className="mr-2" /> 01208955733
                </a>
              </p>
              <p className="text-lg">
                <strong>GitHub:</strong> 
                <a
                  href="https://github.com/Youssif-Hamdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center hover:text-gray-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <FaGithub className="mr-2" /> Youssif-Hamdy
                </a>
              </p>
              <p className="text-lg">
                <strong>LinkedIn:</strong> 
                <a
                  href="https://www.linkedin.com/in/youssif-hamdy100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center hover:text-gray-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <FaLinkedin className="mr-2" /> Youssif Hamdy
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg px-8 pt-6 pb-8 mb-4`}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg focus:outline-none focus:bg-gray-300 hover:shadow-lg transition-shadow duration-300`}
                id="name"
                type="text"
                placeholder="Your Name"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg focus:outline-none focus:bg-gray-300 hover:shadow-lg transition-shadow duration-300`}
                id="email"
                type="email"
                placeholder="Your Email"
                name="from-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="subject">
                Your Subject
              </label>
              <input
                className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg focus:outline-none focus:bg-gray-300 hover:shadow-lg transition-shadow duration-300`}
                id="subject"
                type="text"
                placeholder="Your Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg focus:outline-none focus:bg-gray-300 hover:shadow-lg transition-shadow duration-300`}
                id="message"
                placeholder="Your Message"
                name="message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <motion.button
                className={`w-full ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-700 hover:bg-gray-800'} text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:shadow-lg transition-all duration-300`}
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default GetTouch;