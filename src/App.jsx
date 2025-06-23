import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import Projects from './Projects';

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  const handleToggle = () => {
    setShowInfo(!showInfo);
    setIsGlowing(!isGlowing);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10 space-y-10">

      {/* 🧑‍💻 Always-visible Profile Pic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-cyan-500 to-purple-600 p-1 rounded-full shadow-xl"
      >
        <img 
          src="/Rahul.jpeg" 
          alt="Rahul" 
          className="w-40 h-40 object-cover rounded-full border-4 border-black"
        />
      </motion.div>

      {/* 🎯 Always-visible Name */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-400 bg-clip-text text-transparent"
      >
        Hi, I'm Rahul 👨‍💻
      </motion.h1>

      {/* 💡 Bulb Toggle */}
      <motion.div
        onClick={handleToggle}
        className={`cursor-pointer text-4xl p-4 rounded-full transition-all duration-300 ${
          isGlowing ? 'text-yellow-400 drop-shadow-[0_0_20px_yellow]' : 'text-gray-500'
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaLightbulb />
      </motion.div>

      {/* ℹ️ Info Box */}
      {showInfo && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-300 max-w-2xl"
        >
          3rd Year CSE Student @ KIIT | RPA Enthusiast | Skilled in C++, Java, and UiPath | Passionate about building automation systems and editing impactful content.
        </motion.p>
      )}

      {/* 🚀 Button Menu */}
      <motion.div
        className="flex gap-6 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {['Skills', 'Projects', 'Education', 'Contact'].map((label, i) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={i}
            onClick={() => setSelectedSection(label)}
            className={`px-6 py-3 rounded-lg border ${
              selectedSection === label
                ? 'bg-white text-black border-white'
                : 'bg-black bg-opacity-20 text-white border-white/20 hover:bg-white hover:text-black'
            } transition`}
          >
            🚀 {label}
          </motion.button>
        ))}
      </motion.div>

      {/* 🧩 Conditional Component Rendering */}
      {selectedSection === 'Projects' && <Projects />}
    </div>
  );
}
