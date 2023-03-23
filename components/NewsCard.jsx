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
        src={image.url}
        alt=""
        className="h-56 
        w-full object-cover rounded-t-lg shadow-md"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{image.name}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{res}...</p>
          </section>
          <footer
            className="text-xs text-right 
          ml-auto flex space-x-1 pt-5 italic text-gray-400"
          >
            <p>{image.language} -</p>
            <p>{image.category}</p>
          </footer>
        </div>
        {/* <ReadMoreButton article={article} /> */}
      </div>
    </div>
  );
};

export default NewsCard;
