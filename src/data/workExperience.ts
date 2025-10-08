export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  position: string;
  date: string;
  stack: string[];
  description: string;
  website?: string;
}

export const workExperienceData: WorkExperience[] = [
  {
    id: 'ers-insurance',
    title: 'ERS Insurance',
    company: 'ERS Insurance',
    position: 'Front-End Developer',
    date: 'March 2025 – present',
    stack: [
      'React.js', 'Next.js', 'TypeScript', 'REST APIs', 'OAuth2', 'JWT', 
      'Azure DevOps', 'GitHub Actions', 'Docker', 'Jest', 'Cypress', 
      'Storybook', 'ESLint', 'Vite', 'Prettier', 'Server-side rendering', 
      'Lazy loading', 'Caching', 'WCAG', 'Agile', 'TDD', 'CI/CD'
    ],
    description: 'Developed and maintained a large-scale Admin Dashboard Platform used by internal teams and hundreds of insurance brokers to manage accounts, policies and claims. Built responsive, high-performance interfaces using React, Next.js, and TypeScript, integrating securely with multiple REST APIs to ensure reliable data exchange and real-time updates. Collaborated closely with designers and product owners to deliver intuitive, accessible, and visually consistent UIs aligned with WCAG and brand guidelines. Optimized application performance through server-side rendering, lazy loading, and caching strategies, reducing average load times by up to 40%. Implemented secure authentication and role-based access control using OAuth2 and JWT, ensuring compliance with internal security policies. Contributed to CI/CD pipelines using Azure DevOps, GitHub Actions, and Docker, improving deployment reliability and reducing release cycle times. Maintained and improved shared design systems and front-end tooling (Storybook, ESLint, Vite, Prettier), streamlining collaboration and onboarding for new developers. Wrote and maintained unit and integration tests with Jest and Cypress, adopting TDD practices that reduced frontend defects by 30%. Worked in an Agile environment, collaborating with cross-functional teams to plan, deliver, and iterate on features with measurable business impact.',
    website: 'https://ers.com'
  },
  {
    id: 'cybergenix',
    title: 'Cybergenix Integrated Solution',
    company: 'Cybergenix Integrated Solution',
    position: 'Front-End Developer',
    date: 'March 2022 – March 2025',
    stack: [
      'Next.js', 'React.js', 'TypeScript', 'WebSocket', 'Zod', 'Shadcn UI', 
      'Storybook', 'Figma', 'Zustand', 'Redux', 'Docker', 'Microservices', 
      'OpenAPI/Swagger', 'GitHub Actions', 'Jest', 'SEO', 'WCAG', 'Performance optimization'
    ],
    description: 'Led development of real-time data visualization dashboards using Next.js, ReactJS, TypeScript, and WebSocket technology, enabling live updates for critical business metrics. Developed and maintained responsive web applications using JavaScript Libraries, HTML5, and CSS3. Utilized Zod for validating form data, ensuring user feedback is readable promoting high user experience. Optimized web application performance, reducing loading times by 40% through advanced server-side rendering and performance best practices. Integrated complex WebSocket connections for real-time data streaming, ensuring minimal latency and reliable data flow. Utilized Shadcn UI in building UI Kit, promoting uniformity and high level of brand maintainability. Implemented and maintaining CI/CD pipelines using GitHub Actions for automated testing, deployment, and quality assurance of frontend applications. Implemented comprehensive workflow management using Agile methodologies, ensuring efficient project delivery and team collaboration. Utilized AI-powered development tools to accelerate product development and explore innovative technological solutions. Integrated complex RESTful APIs and managed application state using Zustand, Redux and Context API depending on application\'s use case. Implemented SEO best practices and WCAG web accessibility standards, improving site visibility and user experience. Participated in microservices architecture development, enhancing system scalability and communication efficiency. Designed and implemented front-end features using React and JavaScript ES6, adhering to SOLID principles. Embraced Git for version control, enabling efficient collaboration and code management among the development team.',
    website: 'https://cybergenix.com'
  },
  {
    id: 'topfootball',
    title: 'Top Football Trials UK',
    company: 'Top Football Trials UK',
    position: 'Front-End Developer',
    date: 'November 2021 – March 2022',
    stack: [
      'React.js', 'Jest', 'React Navigation', 'Redux', 'RESTful APIs', 
      'Performance optimization', 'JavaScript ES6', 'HTML5', 'CSS3'
    ],
    description: 'Developed and launched a football scout website, organizing competitions and showcasing player talents to FA-licensed scouts and agents. Developed responsive and dynamic user interfaces using React.js, creating seamless interactions and improving overall user experience. Utilised jest for unit testing in the application\'s frontend. Use of React navigation in conjunction with Redux state management for custom navigation based on data. Collaborated closely with the design team to ensure UI/UX consistency and implement design specifications. Utilized JavaScript and React.js to code and implement frontend features, ensuring robust and efficient functionality. Engaged in technical discussions with the team lead to address integration points and potential issues. Integrated RESTful APIs into the frontend, enabling efficient communication between the backend and frontend components. Implemented client-side form validation and error handling to enhance the reliability of user inputs. Worked on optimizing application performance, identifying bottlenecks, and implementing improvements to achieve faster load times. Ensured code readability, reusability, and maintainability, adhering to best practices and coding standards.',
    website: 'https://topfootballtrialsuk.com'
  },
  {
    id: 'jeffcorp',
    title: 'Jeff Corp Agency',
    company: 'Jeff Corp Agency',
    position: 'Junior Front-End Developer',
    date: 'June 2020 – November 2021',
    stack: [
      'WordPress', 'SEO', 'PPC', 'HTML5', 'CSS3', 'JavaScript', 'Performance optimization'
    ],
    description: 'Contributed to the development, maintenance, and enhancement of 3+ websites. Collaborated with back-end developers, designers, and product team members to resolve front-end issues. Worked closely with senior developers to troubleshoot complex issues, perform periodic updates, and maintain systems. Worked with senior developers to implement SEO and PPC strategies, improving site visibility and user acquisition. Assessed UX and UI designs for technical feasibility. Improved uptime by 15% and reduced downtime incidents by 25% through regular maintenance and optimization. Contributed to the development and maintenance of WordPress-based websites, customizing themes and plugins.',
    website: 'https://jeffcorp.com'
  }
];
