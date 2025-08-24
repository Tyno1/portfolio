declare module 'react-router-hash-link' {
  import type { ComponentType } from 'react';
  
  interface NavHashLinkProps {
    to: string;
    smooth?: boolean;
    className?: string;
    onClick?: () => void;
    scroll?: (el: HTMLElement) => void;
    children: React.ReactNode;
  }
  
  export const NavHashLink: ComponentType<NavHashLinkProps>;
}
