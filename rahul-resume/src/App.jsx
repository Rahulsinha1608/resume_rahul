import './App.css';
import './index.css';
import { motion } from 'framer-motion';
import About from './components/About'; // ✅ Import About section
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-purple-400"
        >
          Hi, I'm Rahul 👨‍💻
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl"
        >
          Automation Enthusiast | UiPath Developer | Tech Explorer
        </motion.p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          View My Work
        </motion.a>
      </div>

      {/* ✅ Add About Section Below Hero */}
      <About />
      <Projects />
    </div>
  );
}

export default App;
