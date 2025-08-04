import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import Reveal from "./Reveal";
// import "./hoverSound.css"; // Optional: include sound trigger CSS if needed

const skills = {
  Frontend: [
    { name: "HTML", icon: <DiHtml5 className="text-orange-600" />, level: 90 },
    { name: "CSS", icon: <DiCss3 className="text-blue-600" />, level: 85 },
    { name: "Sass", icon: <DiSass className="text-pink-600" />, level: 75 },
    { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" />, level: 80 },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" />, level: 85 },
    { name: "React", icon: <DiReact className="text-blue-500" />, level: 80 },
  ],
  Fullstack: [
    { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" />, level: 75 },
    { name: "MongoDB", icon: <DiMongodb className="text-green-600" />, level: 70 },
    { name: "React", icon: <DiReact className="text-blue-500" />, level: 80 },
    { name: "GitHub", icon: <DiGithubBadge className="text-gray-400" />, level: 85 },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="relative max-w-7xl mx-auto flex flex-col justify-center items-center px-4 text-gray-200 pb-16 md:py-12" id="skills">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-transparent animate-pulse"></div>
      </div>

      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">I worked on various frontend and fullstack projects.</p>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "bg-slate-700 text-gray-300 hover:bg-cyan-600"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {skills[activeTab].map((skill, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={300}
              className="rounded-xl"
            >
              <div
                className="bg-slate-900/20 border-2 border-transparent hover:border-cyan-400 rounded-xl p-5 flex flex-col items-center justify-center shadow-lg group relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 z-0 rounded-xl animate-pulse bg-gradient-to-br from-cyan-500/10 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="z-10 text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="z-10 text-sm font-medium text-center mb-2">{skill.name}</span>
                <div className="z-10 w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
              </div>
            </Tilt>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
