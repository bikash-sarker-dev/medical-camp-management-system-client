import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PageHead = ({ title, pathName }) => {
  return (
    <div className="bg-camp-primary py-12 text-center">
      <h1 className="text-4xl font-semibold text-camp-background">{title}</h1>
      <div className="flex gap-1 justify-center items-center text-sm text-camp-info mt-1.5">
        <Link to="/">Home</Link>
        <FaAngleRight />
        <p>{pathName}</p>
      </div>
    </div>
  );
};

export default PageHead;
