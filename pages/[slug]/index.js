import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bar from "@/components/Bar";
import BreadcrumbDetail from "@/components/BreadcrumbDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    return <div>Item not found</div>;
  }
  return (
    <>
      {/* <Bar /> */}
      <Navbar/>
      <div className="items-center justify-center p-4 sm:p-10 w-[260px] mx-20 md:mx-auto">
      <BreadcrumbDetail />
      </div>
      <section className="flex flex-col lg:flex-row pb-24 px-0 md:mx-40 sm:mx-auto lg:px-10 mb-8">
        {/* {news.image && ( */}
        <img
          className="h-50 
          mx-auto md:max-w-lg lg:max-w-xl 
          object-cover md:rounded-lg shadow-md"
          src={news.urlToImage}
          alt={news.title}
        />
        {/* )} */}
        <div className="px-4 md:px-10">
          <h1 className="headerTitle px-0 no-underline pb-8">{news.title}</h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold text-xs md:text-md">By: {news.author || "unknown"}</h2>
            <h2 className="font-bold pl-2 text-xs md:text-md">Source: <a href={news.url} className="hover:underline font-light italic">{news.url}</a></h2>
            <p className="pl-4 text-xs md:text-md">{news.publishedAt}</p>
          </div>
          <p className="pt-4">{news.description}</p>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Detail;
