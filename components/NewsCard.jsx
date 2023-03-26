import React from "react";

const NewsCard = ({ image }) => {
  const desc = image.description;
  const res = desc.substr(0, 100);
  return (
    <div className="bg-slate-100 flex flex-col 
    rounded-lg shadow-lg hover:scale-105 
    hover:shadow-xl hover:bg-slate-200 
    transition-all duration-200 ease-out">
      <img
        src={image.urlToImage || "image not defined"}
        alt={image.title}
        className="h-56 
        w-full object-cover rounded-t-lg shadow-md italic text-sm"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold">{image.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{res}...</p>
          </section>
          <footer
            className="text-xs text-right 
          ml-auto flex space-x-1 pt-5 italic text-gray-400"
          >
            <p>{image.author || "unknown"} -</p>
            <p>{image.publishedAt || "not defined"}</p>
          </footer>
        </div>
        <a href={`/${image.title}`}
      className="bg-orange-400 h-10
        rounded-b-lg dark:text-gray-900
         hover:bg-orange-500 text-center items-center p-2"
    >
      Read More
    </a>
      </div>
    </div>
  );
};

export default NewsCard;
