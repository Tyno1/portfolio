import React from "react";
import { aboutMeData, skillsData, workExperienceData } from "../data";
import projects from "../data/projectsData";
import Card from "./Card";
import WorkCard from "./WorkCard";

function RightSection() {
  return (
    <div className="h-[100%] flex flex-col py-8 px-4 lg:px-0 gap-20">
      <section
        id="work"
        className="flex flex-col gap-2 group pt-8 lg:pt-0 animate-fade-in-up"
      >
        <h2 className="text-[#00ff88] mb-8">WORK EXPERIENCE</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl flex flex-col gap-4">
            {workExperienceData.map((work, index) => (
              <div 
                key={work.id} 
                className="w-full animate-fade-in-up"
                style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
              >
                <WorkCard
                  stack={work.stack.join(" | ").toUpperCase()}
                  title={work.title}
                  date={work.date}
                  position={work.position.toUpperCase()}
                  link={work.website || ""}
                  description={work.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="flex flex-col gap-2 group pt-20 lg:pt-0 animate-fade-in-up animation-delay-200"
      >
        <h2 className="text-[#00ff88] mb-8">PROJECTS</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl flex flex-col gap-4">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="w-full animate-fade-in-up"
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <Card
                  stack={project.stack}
                  title={project.title}
                  link={project.link}
                  description={project.description.intro}
                  inDevelopment={project.inDevelopment}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="flex flex-col gap-2 group pt-20 lg:pt-0 animate-fade-in-up animation-delay-400"
      >
        <h2 className="text-[#00ff88] mb-8">SKILLS</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-[#1b1b1d] p-10 rounded-lg shadow-lg hover:scale-110 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((category) => (
                  <div key={category.id} className="skill-category">
                    <h3 className="text-white text-lg font-semibold mb-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="bg-[#555555] text-white px-3 py-1 rounded-sm text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex flex-col gap-2 group pt-20 lg:pt-0 animate-fade-in-up animation-delay-600"
      >
        <h2 className="text-[#00ff88] mb-8">ABOUT ME</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-[#1a1a1a] p-8 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              {aboutMeData.map((section) => (
                <div key={section.id} className="mb-6 last:mb-0">
                  <h3 className="text-white text-xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-[#a0a0a0] text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RightSection;
