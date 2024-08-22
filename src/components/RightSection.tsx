import React from "react";
import Card from "./Card";
import WorkCard from "./Workcard";

function RightSection() {
  return (
    <div className="h-[100%] flex flex-col py-20 px-4 lg:px-0 lg:pr-20 gap-20 items-center">
      <section id="work" className="w-full flex flex-col gap-2">
        <h2 className="text-white mb-8">WORK EXPERIENCE</h2>
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Transfy"
          date="March 2022 - Present"
          position="FRONTEND DEVELOPER"
          link="https://transfy.io/"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima, quae veritatis velit molestias quos officiis quibusdam ab non repellat inventore ducimus magni et soluta! Corrupti ad voluptate dolorem eveniet!"
        />{" "}
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Top Football Trials UK"
          date="Nov 2021 - March 2022"
          position="JUNIOR FRONTEND DEVELOPER"
          link="https://topfootballtrials.co.uk/"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima, quae veritatis velit molestias quos officiis quibusdam ab non repellat inventore ducimus magni et soluta! Corrupti ad voluptate dolorem eveniet!"
        />{" "}
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Jeff Corp Agency"
          date="June 2021 - Nov 2022"
          position="JUNIOR FRONTEND DEVELOPER"
          link=""
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima, quae veritatis velit molestias quos officiis quibusdam ab non repellat inventore ducimus magni et soluta! Corrupti ad voluptate dolorem eveniet!"
        />{" "}
      </section>
      <section id="projects" className="w-full flex flex-col gap-2 ">
        <h2 className="text-white mb-8">PROJECTS</h2>
        <Card
          stack="TYPESCRIPT | JAVASCRIPT | REACT.JS | REACT NATIVE | NODE JS | TAILWIND CSS"
          title="Flexicart"
          link=""
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima, quae veritatis velit molestias quos officiis quibusdam ab non repellat inventore ducimus magni et soluta! Corrupti ad voluptate dolorem eveniet!"
        />
        <Card
          stack="JAVASCRIPT | REACT.JS | TAILWIND CSS | NODE.JS"
          title="MediKart"
          link="https://medikart.vercel.app/"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima, quae veritatis velit molestias quos officiis quibusdam ab non repellat inventore ducimus magni et soluta! Corrupti ad voluptate dolorem eveniet!"
        />
        <Card
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Jury"
          link="https://jury-project.vercel.app/"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima, quae veritatis velit molestias quos officiis quibusdam ab non repellat inventore ducimus magni et soluta! Corrupti ad voluptate dolorem eveniet!"
        />
      </section>
    </div>
  );
}

export default RightSection;
