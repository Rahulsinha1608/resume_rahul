// src/components/About.jsx
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-[#0f0f0f] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-purple-500 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm Rahul, a 3rd-year Computer Science Engineering student at KIIT University, Bhubaneswar. 
          With a CGPA of 8.81, I am deeply passionate about automation, coding, and development. 
          I’ve worked on real-world UiPath projects like an Automated Student Marks Distribution System 
          and an Email Reader Bot.
          <br /><br />
          Beyond academics, I lead the social media team at the Youth Red Cross Society and edit videos 
          for the NGO Little Paws Care. I’m looking for roles where I can use my development skills 
          to make real impact.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
