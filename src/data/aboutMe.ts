export interface AboutMeSection {
  id: string;
  title: string;
  content: string;
}

export const aboutMeData: AboutMeSection[] = [
  {
    id: 'intro',
    title: 'Introduction',
    content: 'Hi, I am Anthony Ukutegbe, a Front-End Developer & Tech Enthusiast with 3-4 years of professional development experience and strong backend knowledge and full-stack capabilities. Specialized in building responsive web applications, cross-platform mobile solutions, and modern user interfaces using cutting-edge technologies including Next.js, React Native, TypeScript, and Node.js.'
  },
  {
    id: 'passion',
    title: 'Passion & Approach',
    content: 'Beyond the code, I\'m passionate about solving complex problems and learning new technologies. I believe in creating solutions that not only work but also provide exceptional user experiences.'
  },
  {
    id: 'personal',
    title: 'Personal Life',
    content: 'When I\'m not coding, you\'ll find me hitting the gym, watching movies, listening to music, and meeting new people. I enjoy drinks with friends and unwinding when I can. I\'m also a food enthusiast who loves seeking adventure and networking with like-minded professionals.'
  },
  {
    id: 'values',
    title: 'Core Values',
    content: 'I value continuous learning, collaboration, and innovation. My approach combines technical expertise with creative problem-solving, always keeping user experience at the forefront of development decisions.'
  }
];

export const personalDetails = {
  name: 'Anthony Ukutegbe',
  title: 'Front-End Developer & Tech Enthusiast',
  location: 'Cardiff, United Kingdom',
  phone: '+447909453041',
  email: 'anthonyukutegbe1@gmail.com',
  github: 'https://github.com/Tyno1',
  twitter: 'https://x.com/Kvng_Tyno',
  linkedin: 'https://www.linkedin.com/in/anthony-ukutegbe-350b87253/',
  education: [
    {
      degree: 'Master\'s in Computer Science',
      institution: 'University of South Wales',
      location: 'Wales, UK',
      date: 'September 2024'
    },
    {
      degree: 'Bachelor\'s degree in Computer Science',
      institution: 'ESTAM University',
      location: 'Cotonou, Benin Republic',
      date: 'January 2020'
    }
  ]
};
