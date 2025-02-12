import React from "react";
import Card from "./Card";
import WorkCard from "./WorkCard";
import projects from "../projectsData";

function RightSection() {
  return (
    <div className="h-[100%] flex flex-col py-20 px-4 lg:px-0 lg:pr-10 xl:pr-20  gap-20 items-center">
      <section
        id="work"
        className="w-full flex flex-col gap-2 items-center group"
      >
        <h2 className="text-white mb-8 mr-auto">WORK EXPERIENCE</h2>
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Cybergenix Integrated Solution"
          date="March 2022 - Present"
          position="FRONTEND DEVELOPER"
          link="https://cybergenixintegratedsolution.com/"
          description="A dynamic software development company specializing in creating cutting-edge web applications and custom software solutions. Their expertise spans across full-stack development, leveraging the latest technologies and frameworks to deliver robust, scalable, and user-centric digital solutions. With a client-focused approach, they transform business ideas into powerful software applications, whether through sophisticated web platforms, custom enterprise solutions, or innovative digital products. Their development team excels in delivering end-to-end solutions, from initial concept and design through to deployment and ongoing maintenance, ensuring each project meets the highest standards of performance, security, and user experience. As technology partners, they work closely with businesses to understand their unique challenges and objectives, creating tailored software solutions that drive operational efficiency and digital growth. Their commitment to continuous innovation and technical excellence positions them as a trusted partner for businesses seeking to establish or enhance their digital presence through modern web and software development."
        />{" "}
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Top Football Trials UK"
          date="Nov 2021 - March 2022"
          position="JUNIOR FRONTEND DEVELOPER"
          link="https://topfootballtrials.co.uk/"
          description="At Top Football Trials UK, one of the fastest-growing football trials companies, I developed and launched a platform that showcases football talent to FA-licensed scouts and agents. Utilizing JavaScript and React.js, I implemented front-end features to enhance functionality and user experience. I handled complex business logic on the client side, ensuring alignment with user requirements and business needs. I collaborated with the team lead on technical issues and integration points, ensuring code quality and adherence to best practices. Engaged in Agile processes, including sprint planning and daily stand-ups, to drive efficient project delivery."
        />{" "}
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Jeff Corp Agency"
          date="June 2020 - Nov 2021"
          position="JUNIOR FRONTEND DEVELOPER"
          link=""
          description="Contributed to the development, maintenance, and enhancement of multiple websites, working closely with back-end developers, designers, and product teams to address front-end issues. Collaborated with senior developers to troubleshoot complex problems and implement periodic updates, ensuring system reliability. Assessed UX and UI designs for technical feasibility and improved website uptime by 15% while reducing downtime incidents by 25% through regular maintenance and optimization."
        />{" "}
      </section>
      <section
        id="projects"
        className="w-full flex flex-col gap-2 items-center group"
      >
        <h2 className="text-white mb-8 mr-auto">PROJECTS</h2>
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              stack={project.stack}
              title={project.title}
              link={project.link}
              description={project.description.intro}
              inDevelopment={project.inDevelopment}
            />
          );
        })}
      </section>
    </div>
  );
}

export default RightSection;
