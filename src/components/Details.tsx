import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import projects from "../projectsData";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.title === id);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-40 py-10 flex flex-col gap-10">
      <button
        onClick={() => navigate("/")}
        className="bg-white flex items-center justify-center py-2 px-4 text-sm mt-4 gap-1 ml-auto"
      >
        Go Home
      </button>
      <div className="top-section flex flex-col lg:flex-row gap-10 items-start lg:items-end">
        <div className="image-container w-full sm:w-[70vw] md:w-[50vw] lg:w-[30vw] h-[35vh] bg-white ">
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-6xl font-bold">{project.title}</h2>
          <div className="stack mb-6 flex flex-wrap gap-4">
            {project.stack.map((stack) => (
              <span
                key={stack}
                className="border-2 border-[#777778] text-[#777778] px-4 py-2 rounded-md text-xs"
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
                  className="border-2 border-[#777778] text-[#777778] px-4 py-3 rounded-md text-xs"
                >
                  {iface}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-section text-white flex flex-col items-start ">
        <p className=" text-sm md:text-base leading-loose">
          {project.description.intro}
        </p>

        <h3 className="text-3xl font-bold my-6 border-2 border-[#777778] text-[#777778] px-4 py-3 rounded-lg">
          Platform Development
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-4 ">
          {Object.entries(project.description.platformDevelopment).map(
            ([key, value]) => (
              <li className="flex flex-col leading-loose" key={key}>
                <strong className="capitalize text-[#777778] text-xl">
                  {key.replace(/([A-Z])/g, " $1")}:
                </strong>{" "}
                {value}
              </li>
            )
          )}
        </ul>

        <h3 className="text-3xl font-bold my-6 border-2 border-[#777778] text-[#777778] px-4 py-3 rounded-lg">
          Key Features
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-4">
          {Object.entries(project.description.keyFeatures).map(
            ([key, value]) => (
              <li className="flex flex-col leading-loose" key={key}>
                <strong className="capitalize text-[#777778] text-xl">
                  {key.replace(/([A-Z])/g, " $1")}:
                </strong>{" "}
                {value}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Details;
