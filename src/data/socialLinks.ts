export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socialLinksData: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Tyno1',
    icon: 'FaGithub',
    color: '#a0a0a0'
  },
  // {
  //   id: 'twitter',
  //   name: 'Twitter',
  //   url: 'https://x.com/Kvng_Tyno',
  //   icon: 'FaTwitter',
  //   color: '#a0a0a0'
  // },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:anthonyukutegbe1@gmail.com',
    icon: 'MdAlternateEmail',
    color: '#a0a0a0'
  },
  // {
  //   id: 'linkedin',
  //   name: 'LinkedIn',
  //   url: 'https://www.linkedin.com/in/anthony-ukutegbe-350b87253/',
  //   icon: 'FaLinkedin',
  //   color: '#a0a0a0'
  // }
];
