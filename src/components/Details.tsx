import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projectsData";
import ParticleBackground from "./ParticleBackground";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.title === id);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0f0f0f]">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="px-6 md:px-10 lg:px-20 xl:px-40 py-10 flex flex-col gap-10 relative z-10">
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate("/portfolio")}
            className="bg-[#00ff88] text-black hover:bg-[#00cc6a] active:bg-[#00ff88] active:outline active:outline-2 active:outline-[#00ff88] transition-all duration-200 flex items-center justify-center py-2 px-4 text-sm gap-1 rounded-lg font-medium hover:scale-105 hover:shadow-lg"
          >
            ← Back to Portfolio
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-[#00ff88] text-black hover:bg-[#00cc6a] active:bg-[#00ff88] active:outline active:outline-2 active:outline-[#00ff88] transition-all duration-200 flex items-center justify-center py-2 px-4 text-sm gap-1 rounded-lg font-medium hover:scale-105 hover:shadow-lg"
          >
            Go Home
          </button>
        </div>
        <div className="top-section flex flex-col lg:flex-row gap-10 items-start lg:items-end animate-fade-in-up">
          <div className="image-container w-full sm:w-[70vw] md:w-[50vw] lg:w-[30vw] h-[35vh] bg-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-200">
            <h2 className="text-white text-6xl font-bold hover:scale-105 transition-transform duration-300">{project.title}</h2>
            <div className="stack mb-6 flex flex-wrap gap-4">
              {project.stack.map((stack) => (
                <span
                  key={stack}
                  className="border-2 border-[#a0a0a0] text-[#a0a0a0] px-4 py-2 rounded-md text-xs hover:scale-105 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-200"
                >
                  {stack}
                </span>
              ))}
            </div>
            <div className="interface flex flex-col gap-2">
              <h4 className="text-white font-bold">Interfaces:</h4>
              <ul className=" list-inside flex flex-col md:flex-row items-start gap-4">
                {project.interface.map((iface) => (
                  <li
                    key={iface}
                    className="border-2 border-[#a0a0a0] text-[#a0a0a0] px-4 py-3 rounded-md text-xs hover:scale-105 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-200"
                  >
                    {iface}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-section text-white flex flex-col items-start animate-fade-in-up animation-delay-400">
          <p className=" text-sm md:text-base leading-loose">
            {project.description.intro}
          </p>

          <h3 className="text-3xl font-bold my-6 border-2 border-[#a0a0a0] text-[#a0a0a0] px-4 py-3 rounded-lg hover:scale-105 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300">
            Platform Development
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-4 ">
            {Object.entries(project.description.platformDevelopment).map(
              ([key, value]) => (
                <li className="flex flex-col leading-loose hover:scale-[1.02] transition-transform duration-200" key={key}>
                  <strong className="capitalize text-[#a0a0a0] text-xl">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </strong>{" "}
                  {value}
                </li>
              )
            )}
          </ul>

          <h3 className="text-3xl font-bold my-6 border-2 border-[#a0a0a0] text-[#a0a0a0] px-4 py-3 rounded-lg hover:scale-105 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300">
            Key Features
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-4">
            {Object.entries(project.description.keyFeatures).map(
              ([key, value]) => (
                <li className="flex flex-col leading-loose hover:scale-[1.02] transition-transform duration-200" key={key}>
                  <strong className="capitalize text-[#a0a0a0] text-xl">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </strong>{" "}
                  {value}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
