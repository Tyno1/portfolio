export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming & Scripting',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Python']
  },
  {
    id: 'frontend',
    name: 'Frontend Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'React Native', 'jQuery']
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'Microservices', 'WebSocket']
  },
  {
    id: 'state',
    name: 'State Management',
    skills: ['Redux Toolkit', 'Zustand', 'Context API']
  },
  {
    id: 'styling',
    name: 'Styling & UI',
    skills: ['Tailwind CSS', 'Shadcn UI', 'Bootstrap', 'Framer Motion']
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: ['SQL (MySQL)', 'MongoDB']
  },
  {
    id: 'testing',
    name: 'Testing & Quality',
    skills: ['Jest', 'Unit & Integration Testing', 'TDD', 'Test Coverage Reporting']
  },
  {
    id: 'devops',
    name: 'DevOps & Deployment',
    skills: ['Docker', 'GitHub Actions (CI/CD)', 'Azure DevOps', 'Jira', 'Asana']
  },
  {
    id: 'security',
    name: 'Security',
    skills: ['OAuth', 'JWT', 'Secure Coding Practices', 'IAM']
  },
  {
    id: 'design',
    name: 'Design & Collaboration',
    skills: ['Figma', 'Storybook', 'Adobe Photoshop', 'Illustrator']
  },
  {
    id: 'performance',
    name: 'Performance & Monitoring',
    skills: ['Chrome DevTools', 'Lighthouse', 'Web Vitals']
  }
];
