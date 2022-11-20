import React from "react";

export const CardBlog = ({ title, content }) => {
  return (
    <div className="container w-full mx-auto px-10 py-4 flex flex-col rounded-xl drop-shadow-md font-body bg-white-100">
      <h1 className="pb-4 text-primary-80 font-semibold text-xl text-left md:text-2xl font-body">
        {title}
      </h1>
      <p className="text-left font-body text-base md:text-lg">{content}</p>
    </div>
  );
};
