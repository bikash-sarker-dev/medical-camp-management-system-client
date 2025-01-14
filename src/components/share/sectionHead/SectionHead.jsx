import React from "react";

const SectionHead = ({ title, subTitle }) => {
  return (
    <div>
      <h2 className="text-4xl lg:text-5xl text-center font-bold font-poppins">
        {title}
      </h2>
      <p className="text-gray-700 text-lg max-w-2xl text-center my-5 mx-auto">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHead;
