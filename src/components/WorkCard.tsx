import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

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
  const [viewMore, setViewMore] = useState(false);
  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <div className="w-full md:w-[90%] flex flex-col items-start gap-4 shadow-lg p-10 bg-[#1b1b1d] transition md:hover:!opacity-100 md:hover:scale-110 md:group-hover:opacity-50 ">
      <p className="stack text-white text-xs md:text-sm">{position}</p>
      <div className="flex w-full justify-between gap-2 items-center">
        <p className="title text-white font-bold text-xl md:text-4xl">
          {title}
        </p>
        <p className="title text-[#777778] font-normal text-xs md:text-sm">
          {date}
        </p>
      </div>
      <p className="stack text-white text-xs md:text-sm">{stack}</p>
      <p
        className={`description text-[#777778] text-xs md:text-sm text-justify leading-loose lg:leading-relaxed transition-all ease-in-out duration-700 overflow-hidden ${
          viewMore ? "max-h-96" : "max-h-16"
        }`}
      >
        {description}
      </p>
      <div className="flex gap-4">
        <Link
          to={link}
          target="_blank"
          className="py-2 px-4 bg-[#777778] rounded-sm text-xs cursor-pointer flex justify-center items-center"
        >
          Visit
        </Link>
        {viewMore ? (
          <button
            onClick={toggleViewMore}
            className="py-2 pl-4 pr-2 bg-[#777778] rounded-sm text-xs cursor-pointer flex items-center"
          >
            <p>View Less</p>
            <IoMdArrowDropup size={20} />
          </button>
        ) : (
          <button
            onClick={toggleViewMore}
            className="py-2 pl-4 pr-2 bg-[#777778] rounded-sm text-xs cursor-pointer flex items-center"
          >
            <p>View More</p>
            <IoMdArrowDropdown size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
