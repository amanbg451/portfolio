import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Codsoft",
    period: "June 2023 - August 2023",
    position: "Web Developer Intern",
    description: "Description of your experience in this company.",
  },
  {
    company: "cognifyz technologies",
    period: "June 2024 - August 2024",
    position: "Software Developer Intern",
    description: "Description of your experience in this company.",
  },
  // {
  //   company: 'Third Company',
  //   period: '2020 - Present',
  //   description: 'Description of your experience in this company.',
  // },
  // {
  //   company: 'Fourth Company',
  //   period: '2020 - Present',
  //   description: 'Description of your experience in this company.',
  // },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold mb-12">
        Experience
      </h1>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-white-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-slate-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300 text-lg">{experience.position}</p>
              <p className="text-gray-300 text-sm">{experience.period}</p>
              <p className="text-gray-400 mt-2 text-sm">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
