import React from "react";

const ImageCard = ({ image }) => {
const desc = image.description;
  const res = desc.substr(0, 40);
  return (
    <div className="bg-white rounded-lg overflow-hidden mx-auto w-48 m-4 space-x-0 sm:w-64 hover:shadow-2xl">
      <img src={image.image} alt="" className="w-full h-36 md:h-48 object-contain p-2 my-5 rounded-md"/>
      <div className="px-6 py-8">
        <div className="font-bold text-gay-400 text-lg mb-3">
          {image.name}
        </div>
        <div className="text-gray-400">
          <ul>
            <li>
              {res}...
            </li>
            <li className="text-base mt-1 mb-1">
              <strong>Rp.{image.price},-</strong>
            </li>
            <li className="text-gray-300 text-sm">
              {image.category}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;