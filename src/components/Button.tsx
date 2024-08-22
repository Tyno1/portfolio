import React, { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";

type ButtonProps = {
  logo: ReactNode;
  name: string;
  link: string;
};

const Button = ({ logo, name, link }: ButtonProps) => {
  return (
    <button
      onClick={() => window.open(link)}
      className="flex gap-2 items-center text-xs"
    >
      <div>{logo}</div>
      <p className="text-white text-xs">{name}</p>
      <MdArrowOutward color="white" />
    </button>
  );
};

export default Button;
