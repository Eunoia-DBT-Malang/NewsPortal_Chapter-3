import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bar from "@/components/Bar";
import BreadcrumbDetail from "@/components/BreadcrumbDetail";
import Navbar from "@/components/Navbar";
import NotFound from "../404";

async function getNews() {
  const data = await fetch(
    "https://api.jsonbin.io/v3/b/641c9221c0e7653a058ef5c0"
  );
  const result = await data.json();
  return result.record.articles;
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getNews();
      const item = data.find((e) => e.title === slug);
      setNews(item);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!news) {
    return <NotFound/>;
  }
  return (
    <>
      {/* <Bar /> */}
      <Navbar/>
      <div className="items-center justify-center p-4 sm:p-10 w-[260px] mx-auto">
      <BreadcrumbDetail />
      </div>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {/* {news.image && ( */}
        <img
          className="h-50 max-w-md 
          mx-auto md:max-w-lg lg:max-w-xl 
          object-cover rounded-lg shadow-md"
          src={news.urlToImage}
          alt={news.title}
        />
        {/* )} */}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">{news.title}</h1>
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
