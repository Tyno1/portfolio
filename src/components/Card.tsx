import React from "react";
import { Link, useNavigate } from "react-router-dom";

export type CardProps = {
  stack: string[];
  title: string;
  description: string;
  link: string;
};

const Card = ({ stack, title, description, link }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[90%] flex flex-col items-start gap-4 shadow-lg p-10 bg-[#1b1b1d] transition md:hover:!opacity-100 md:hover:scale-110 md:group-hover:opacity-50 ">
      <p className="stack text-white text-xs md:text-sm">
        {stack.map((item, index) => (
          <React.Fragment key={item}>
            <span className="stack-item">{item}</span>
            {index < stack.length - 1 && (
              <span className="separator text-dawn"> | </span>
            )}
          </React.Fragment>
        ))}
      </p>
      <p className="title text-white font-bold text-lg md:text-4xl">{title}</p>
      <p className="description text-[#A6A6A6] text-xs md:text-sm text-left line-clamp-3">
        {description}
      </p>
      <div className="flex gap-4">
        <Link
          className="py-2 px-4 bg-dawn text-black rounded-sm text-xs cursor-pointer"
          to={link}
          target="_blank"
        >
          View Project
        </Link>
        <button
          onClick={() => navigate(`/details/${title.toLowerCase}`)}
          className="py-2 px-4 bg-dawn text-black rounded-sm text-xs cursor-pointer"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
