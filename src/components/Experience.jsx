import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Codsoft",
    period: "June 2023 - August 2023",
    position: "Web Developer Intern",
    description:
      "Worked on frontend development, building responsive UIs and improving performance.",
  },
  {
    company: "Cognifyz Technologies",
    period: "June 2024 - August 2024",
    position: "Software Developer Intern",
    description:
      "Built internal tools, automated testing, and collaborated in agile development.",
  },
];

const Experience = () => {
  return (
    <div className="py-20 px-4 sm:px-8 max-w-5xl mx-auto relative">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-white mb-16 relative"
      >
        <span className="inline-block border-b-4 border-purple-500 pb-2">Experience</span>
      </motion.h2>

      {/* Vertical Line */}
      <div className="absolute left-4 top-32 bottom-4 w-1 bg-purple-600/30 sm:left-8 md:left-10 lg:left-16"></div>

      {/* Timeline Cards */}
      <div className="flex flex-col gap-12 relative z-10 pl-12 sm:pl-16 md:pl-20 lg:pl-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Animated Icon */}
            <div className="absolute -left-[3.4rem] sm:-left-[3.6rem] top-1 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:animate-pulse">
              <Briefcase className="w-5 h-5 text-white" />
            </div>

            {/* Card */}
            <div className="bg-slate-800/70 border border-gray-600 rounded-xl p-6 shadow-lg backdrop-blur-md 
                            group-hover:shadow-purple-500/40 group-hover:border-purple-400 
                            transform transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/90 relative overflow-hidden">

              {/* Inner glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0 bg-gradient-to-r from-purple-700/10 to-pink-500/10 blur-md"></div>

              {/* Content */}
              <div className="relative z-10 transition-all duration-300 group-hover:text-white">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-purple-400 font-semibold group-hover:text-purple-300">{exp.position}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
