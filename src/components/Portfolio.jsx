import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import maulee from "../assets/maulee.png"
import vc from "../assets/vc.png"
import va from "../assets/va.jpeg"

const projects = [
  {
    img: va,
    title: "Virtual Assistant",
    description: "Developed a responsive and intuitive frontend UI for an AI-powered virtual assistant platform, focusing on usability, voice interaction integration, and modular component architecture using React, Tailwind, and Vite.",
    tech: ["React", "Tailwind", "Vite", "MongoDB", "Express", "NodeJs", "JavaScript"],
    links: {
      site: "https://virtualassistant-cf35.onrender.com/",
      github: "",
    },
  },
  {
    img: maulee,
    title: "Maulee Foundation",
    description: "Built a sleek and accessible website for a non-profit organization to promote their mission, events, and donation activities. Implemented responsive layouts, reusable UI components, and integrated animations to enhance user engagement.",
    tech: ["NextJs", "TailwindCSS", "Typecript", "Postman", "ShadCN"],
    links: {
      site: "https://maulee.org/",
      github: "",
    },
  },
  {
    img: vc,
    title: "VC Talent Pool",
    description: "Engineered a dynamic dashboard interface for managing talent profiles and VC applications. Focused on performance optimization, secure routing, and clean UI using React and Tailwind, deployed internally for organizational use.",
    tech: ["NextJs", "TailwindCSS", "Typecript", "Postman", "ShadCN"],
    links: {
      site: "https://vc-talent.baseel.com/dashboard",
      github: "",
    },
  },
  {
    img: project1,
    title: "Food Delivery Website",
    description: "UI for frontend development using React.",
    tech: ["React", "Tailwind", "Vite"],
    links: {
      site: "https://sweto.vercel.app/",
      github: "https://github.com/amanbg451/Food",
    },
  },
  {
    img: project2,
    title: "Task Manager",
    description: "A fullstack application built with Node.js and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB"],
    links: {
      site: "https://taskmanger45.vercel.app/",
      github: "https://github.com/amanbg451/to-do-list",
    },
  },
  {
    img: project3,
    title: "TextUtil",
    description: "An e-commerce platform with various features.",
    tech: ["React", "Bootstrap"],
    links: {
      site: "https://github.com/amanbg451/textutil",
      github: "https://github.com/amanbg451/textutil",
    },
  },
  {
    img: project4,
    title: "Tic-Tac-Toe",
    description: "A mobile-friendly application using React Native.",
    tech: ["React Native"],
    links: {
      site: "https://github.com/amanbg451/Tic_Tac_Toe-game",
      github: "https://github.com/amanbg451/Tic_Tac_Toe-game",
    },
  },
  {
    img: project5,
    title: "News App",
    description: "A data visualization project using APIs.",
    tech: ["React", "API"],
    links: {
      site: "https://github.com/amanbg451/newsapp",
      github: "https://github.com/amanbg451/newsapp",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 md:my-20" id="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-white mb-16 relative"
      >
        <span className="inline-block border-b-4 border-purple-500 pb-2">
          Projects
        </span>
      </motion.h2>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Reveal>
                <div className="bg-slate-800 p-4 rounded-3xl shadow-lg">
                  <div className="relative group overflow-hidden rounded-3xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-60 object-cover transition transform duration-500 group-hover:scale-105 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition rounded-3xl">
                      <h3 className="text-white text-lg font-semibold">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-cyan-700/30 text-cyan-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4 mt-4">
                      <a
                        href={project.links.site}
                        target="_blank"
                        className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
                      >
                        View Site
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        className="p-2 bg-slate-700 text-white rounded-full hover:bg-slate-800 text-xl"
                      >
                        <AiOutlineGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="relative group w-full md:w-1/2 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-3xl transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl flex items-center justify-center">
                  <h3 className="text-xl text-white font-semibold text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="w-full md:w-1/2 text-gray-200">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-700/30 px-3 py-1 rounded-full text-cyan-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.links.site}
                    target="_blank"
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="p-2 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition text-xl"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
