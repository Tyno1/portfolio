import React from "react";
import { Link, useNavigate } from "react-router-dom";

export type CardProps = {
  stack: string[];
  title: string;
  description: string;
  link: string;
};

const Card = ({ stack, title, description, link, }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-start gap-4 shadow-lg p-10 bg-[#1b1b1d] cursor-pointer">
      <p className="stack text-white text-xs md:text-sm">
        {stack.map((item, index) => (
          <React.Fragment key={item}>
            <span className="stack-item">{item}</span>
            {index < stack.length - 1 && <span className="separator text-[#777778]"> | </span>}
          </React.Fragment>
        ))}
      </p>
      <p className="title text-white font-bold text-lg md:text-4xl">{title}</p>
      <p className="description text-[#777778] text-xs md:text-sm text-left line-clamp-3">
        {description}
      </p>
      <div className="flex gap-4">
        <Link
          className="py-2 px-4 bg-[#777778] rounded-sm text-xs cursor-pointer"
          to={link}
          target="_blank"
        >
          View Project
        </Link>
        <button
          onClick={() => navigate(`/details/${title}`)}
          className="py-2 px-4 bg-[#777778] rounded-sm text-xs cursor-pointer"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
