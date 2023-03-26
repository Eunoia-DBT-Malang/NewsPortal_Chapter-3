import React, { useState } from "react";
import { useRouter } from "next/router";

async function getNews(title) {
  const [news, setNews] = useState([]);
  const data = await fetch("https://api.jsonbin.io/v3/b/641c9221c0e7653a058ef5c0");
  const result = await data.json();
  setNews(result.record.articles);
  const item = news.find((e) => e.title === title);
  console.log(item)
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const news = getNews(slug);

  if (Object.keys(news).length === 1) {
    return <div>Item not found</div>;
  }
  return (
    <>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {news.image && (
          <img
            className="h-50 max-w-md 
          mx-auto md:max-w-lg lg:max-w-xl 
          object-cover rounded-lg shadow-md"
            src={news.urlToImage}
            alt={news.title}
          />
        )}
        <div className="px-10">
          <h1 className="px-0 no-underline pb-2">
            {news.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {news.author || "unknown"}</h2>
            <h2 className="font-bold pl-2">Source: {news.url}</h2>
            <p className="pl-4">{news.publishedAt}</p>
          </div>
          <p className="pt-4">{news.description}</p>
        </div>
      </section>
    </>
  );
}

export default Detail;
