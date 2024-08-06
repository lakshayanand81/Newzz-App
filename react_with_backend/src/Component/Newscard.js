import React from "react";

const NewsCard = ({ title, image, description, content }) => {
  return (
    <div className="w-full h-fit hover:shadow-md p-6 transition duration-200 ease-in-out">
      <img src={image} alt="" className="w-full h-auto object-contain rounded-lg" />
      <h1 className="text-2xl font-semibold bg-gray-300 p-3 mt-4 rounded-md">{title}</h1>
      <p className="text-[1.1rem] text-black mt-6  bg-red-500 p-2">
        {description}
      </p>
      <p className="text-[1.1rem] text-black mt-6  bg-blue-500 p-2">
        {content}
      </p>
    </div>
  );
};

export default NewsCard;
