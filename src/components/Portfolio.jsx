import React from "react";
import project1 from "../assets/project-1.png";
// import project1 from "../assets/project1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Food Delivery website",
    description: "UI for frontend development using React.",
    links: {
      site: "https://sweto.vercel.app/",
      github: "https://github.com/amanbg451/Food",
    },
  },
  {
    img: project2,
    title: "Task Manager",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "https://taskmanger45.vercel.app/",
      github: "https://github.com/amanbg451/to-do-list",
    },
  },
  {
    img: project3,
    title: "TextUtil",
    description: "An e-commerce platform with various features.",
    links: {
      site: "https://github.com/amanbg451/textutil",
      github: "https://github.com/amanbg451/textutil",
    },
  },
  {
    img: project4,
    title: "Tic-Tac-Toe",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "https://github.com/amanbg451/Tic_Tac_Toe-game",
      github: "https://github.com/amanbg451/Tic_Tac_Toe-game",
    },
  },
  {
    img: project5,
    title: "news app",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "https://github.com/amanbg451/newsapp",
      github: "https://github.com/amanbg451/newsapp",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
        Project
      </h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-80 h-80 object-cover rounded-3xl shadow-2xl opacity-90 hover:"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  target="_blank"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      
    </div>
  );
};

export default Portfolio;
