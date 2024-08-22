import React from "react";
import { Link } from "react-router-dom";

export type CardProps = {
  stack: string;
  title: string;
  description: string;
  date: string;
  position: string;
  link: string;
};

const WorkCard = ({
  stack,
  title,
  description,
  date,
  position,
  link,
}: CardProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-4 shadow-lg p-10 bg-[#1b1b1d]">
      <p className="stack text-white text-xs md:text-sm">{position}</p>
      <div className="flex w-full justify-between gap-2 items-center">
        <p className="title text-white font-bold text-xl md:text-4xl">{title}</p>
        <p className="title text-[#777778] font-normal text-xs md:text-sm">{date}</p>
      </div>
      <p className="stack text-white text-xs md:text-sm">{stack}</p>
      <p className="description text-[#777778] text-xs md:text-sm text-left line-clamp-3">{description}</p>
      <Link
        to={link}
        target="_blank"
        className="py-2 px-4 bg-[#777778] rounded-md text-xs cursor-pointer"
      >
        View
      </Link>
    </div>
  );
};

export default WorkCard;
