import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaUser, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaLanguage } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const PersonalInfo: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/uc?export=download&id=1Tfh3EH3waU59Awin792L94LmC5CXoST9';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Youssif_Hamdy_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`grid grid-cols-1 gap-4 p-4 rounded-xl mb-6 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-100'
        } md:grid-cols-2 md:gap-6 md:p-6`}
      >
        <div className="space-y-3 md:space-y-4">
          <InfoItem icon={<FaUser />} label="First Name" value="Youssif" darkMode={darkMode} />
          <InfoItem icon={<FaUser />} label="Last Name" value="Hamdy" darkMode={darkMode} />
          <InfoItem icon={<FaGlobe />} label="Nationality" value="Egypt" darkMode={darkMode} />
          <InfoItem icon={<FaCalendarAlt />} label="Age" value="22" darkMode={darkMode} />
        </div>
        <div className="space-y-3 md:space-y-4">
          <InfoItem icon={<FaMapMarkerAlt />} label="Address" value="Portsaid" darkMode={darkMode} />
          <InfoItem icon={<MdWork />} label="Freelance" value="Available" darkMode={darkMode} />
          <InfoItem icon={<FaPhone />} label="Phone" value="01208955733" darkMode={darkMode} />
          <InfoItem icon={<FaLanguage />} label="Languages" value="Arabic, English" darkMode={darkMode} />
        </div>
      </motion.div>

    

      {/* Download Button - حجم مناسب للهواتف */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCV}
          className={`px-5 py-2.5 rounded-lg font-medium flex items-center text-sm ${
            darkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
              : 'bg-gray-800 hover:bg-gray-700 text-white'
          } sm:px-6 sm:py-3 sm:text-base`}
        >
          <FaDownload className="mr-2 text-sm sm:text-base" />
          Download CV
        </motion.button>
      </motion.div>
    </div>
  );
};

const InfoItem: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  darkMode: boolean 
}> = ({ icon, label, value, darkMode }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center p-2 rounded-lg text-sm ${
        darkMode ? 'bg-gray-700' : 'bg-gray-200'
      } sm:p-3 sm:text-base`}
    >
      <div className={`p-1.5 mr-2 rounded-full text-xs ${
        darkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-800'
      } sm:p-2 sm:text-sm`}>
        {icon}
      </div>
      <div>
        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} sm:text-sm`}>
          {label}
        </div>
        <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-base`}>
          {value}
        </div>
      </div>
    </motion.div>
  );
};


export default PersonalInfo;