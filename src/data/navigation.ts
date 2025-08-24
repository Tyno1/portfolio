export interface NavigationItem {
  id: string;
  title: string;
  path: string;
  hash?: string;
  order: number;
  isExternal?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'work',
    title: 'Work Experience',
    path: '#work',
    hash: 'work',
    order: 1
  },
  {
    id: 'projects',
    title: 'Projects',
    path: '#projects',
    hash: 'projects',
    order: 2
  },
  {
    id: 'skills',
    title: 'Skills',
    path: '#skills',
    hash: 'skills',
    order: 3
  },
  {
    id: 'about',
    title: 'About Me',
    path: '#about',
    hash: 'about',
    order: 4
  },
  {
    id: 'home',
    title: 'Home',
    path: '/',
    order: 5,
    isExternal: true
  }
];

export const getNavigationByOrder = () => {
  return navigationItems.sort((a, b) => a.order - b.order);
};

export const getNavigationByType = (type: 'internal' | 'external') => {
  return navigationItems.filter(item => 
    type === 'internal' ? !item.isExternal : item.isExternal
  );
};
