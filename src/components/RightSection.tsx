import React from "react";
import Card from "./Card";
import WorkCard from "./WorkCard";
import projects from "../projectsData";

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
          description="At Transfy, a leading Fintech startup revolutionizing cross-border financial transactions in Africa, I optimized web application performance, reducing load times by 40% and increasing user engagement by 25%. Implemented server-side rendering, improving initial page load speeds by 30%. Designed and developed scalable front-end features using React and JavaScript ES6, and collaborated on API integration for enhanced data functionality. Ensured code quality and maintainability, followed Agile processes, and converted wireframes into high-fidelity web pages, contributing to Transfy’s mission of making financial transactions across Africa seamless and cost-effective."
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
          date="June 2021 - Nov 2022"
          position="JUNIOR FRONTEND DEVELOPER"
          link=""
          description="Contributed to the development, maintenance, and enhancement of multiple websites, working closely with back-end developers, designers, and product teams to address front-end issues. Collaborated with senior developers to troubleshoot complex problems and implement periodic updates, ensuring system reliability. Assessed UX and UI designs for technical feasibility and improved website uptime by 15% while reducing downtime incidents by 25% through regular maintenance and optimization."
        />{" "}
      </section>
      <section id="projects" className="w-full flex flex-col gap-2 ">
        <h2 className="text-white mb-8">PROJECTS</h2>
        <Card
          stack={projects[0].stack}
          title={projects[0].title}
          link={projects[0].link}
          description={projects[0].description.intro}
        />
        <Card
          stack={projects[1].stack}
          title={projects[1].title}
          link={projects[1].link}
          description={projects[1].description.intro}
        />
        <Card
          stack={projects[2].stack}
          title={projects[2].title}
          link={projects[2].link}
          description={projects[2].description.intro}
        />
      </section>
    </div>
  );
}

export default RightSection;
