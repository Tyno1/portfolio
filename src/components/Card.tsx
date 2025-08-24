import React from "react";
import { Link, useNavigate } from "react-router-dom";

export type CardProps = {
  stack: string[];
  title: string;
  description: string;
  link: string;
  inDevelopment: boolean;
};

const Card = ({
  stack,
  title,
  description,
  link,
  inDevelopment,
}: CardProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-start gap-4 shadow-lg p-10 bg-[#1b1b1d] transition hover:!opacity-100 hover:scale-105 active:scale-95 group-hover:opacity-50 md:hover:scale-110">
     <span>
       {inDevelopment && (
         <span className="badge bg-rose-600 p-1 text-white text-xs rounded-sm">
           In Development
         </span>
       )}
     </span>
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
          className="py-2 px-4 bg-[#555555] text-white rounded-sm text-xs cursor-pointer font-medium hover:bg-[#666666] transition-colors"
          to={link}
          target="_blank"
          aria-label={`View ${title} project`}
        >
          View Project
        </Link>
        <button
          type="button"
          onClick={() => navigate(`/details/${title}`)}
          className="py-2 px-4 bg-[#555555] text-white rounded-sm text-xs cursor-pointer font-medium hover:bg-[#666666] transition-colors"
          aria-label={`View detailed information about ${title}`}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
