import React from "react";

const ImageCard = ({ image }) => {
  const desc = image.description;
  const res = desc.substr(0, 40);
  return (
    <div className="bg-white rounded-lg overflow-hidden mx-auto w-48 m-4 space-x-0 sm:w-64 hover:shadow-2xl">
      <img
        src={image.url}
        alt=""
        className="w-full h-36 md:h-48 object-contain p-2 my-5 rounded-md"
      />
      <div className="px-6 py-8">
        <div className="font-bold text-gray-700 text-lg mb-3">{image.name}</div>
        <div className="text-gray-600">
          <ul>
            <li>{res}...</li>
            <li className="text-gray-500 text-sm mt-1">{image.category}</li>
            <li className="font-bold">{image.language}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
