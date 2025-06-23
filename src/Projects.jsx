import { motion } from 'framer-motion';

const projects = [
  {
    title: "Automated Marks Distribution System",
    description: "Automated sending of student marks via email using UiPath, Excel, and Gmail SMTP.",
    tools: ["UiPath", "Excel", "SMTP"],
    year: "2024"
  },
  {
    title: "Automated Mail Reader",
    description: "Reads and filters unread emails, displaying subjects and senders using UiPath and Gmail API.",
    tools: ["UiPath", "Gmail API"],
    year: "2024"
  }
];

export default function Projects() {
  return (
    <div className="py-20 bg-black text-white px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
        💼 Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-xl p-6 border border-white/10 shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-pink-400">
              {project.tools.map((tool, i) => (
                <span key={i} className="bg-white/10 px-3 py-1 rounded-full">{tool}</span>
              ))}
            </div>
            <p className="text-right mt-4 text-xs text-gray-500">📅 {project.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
