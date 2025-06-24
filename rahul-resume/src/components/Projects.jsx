import { motion } from "framer-motion";

const projects = [
  {
    title: "Automated Student Marks Distribution System",
    description: "Automates email distribution of marks using UiPath, Excel, and Gmail.",
    tools: "UiPath, Excel, Gmail",
    year: "2024",
  },
  {
    title: "Automated Mail Reader",
    description: "Reads and filters unread emails with sender and subject info.",
    tools: "UiPath, Gmail API",
    year: "2024",
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-[#111111] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-purple-500 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-purple-800 shadow-lg hover:shadow-purple-600 transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <p className="text-sm text-gray-400">
                <strong>Tools:</strong> {project.tools}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Year:</strong> {project.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
