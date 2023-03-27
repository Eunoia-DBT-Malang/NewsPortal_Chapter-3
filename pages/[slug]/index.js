import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BreadcrumbDetail from "@/components/BreadcrumbDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  const [news, setNews] = useState(null);
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
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600 m-auto mt-[75%] md:mt-[20%]"/>;
  }
  return (
    <>
      <Navbar/>
      <div className="items-center justify-center p-4 sm:p-10 w-[260px] mx-20 md:mx-auto">
      <BreadcrumbDetail />
      </div>
      {news ? <section className="flex flex-col lg:flex-row pb-24 px-0 md:mx-40 sm:mx-auto lg:px-10 md:mb-8">
        {/* {news.image && ( */}
        <img
          className="h-50 
          mx-auto md:max-w-md lg:max-w-md 
          object-cover md:rounded-lg shadow-md md:block hidden"
          src={news.urlToImage || "image not found"}
          alt={news.title }
        />
        {/* )} */}
        <div className="px-4 md:px-10">
          <h1 className="headerTitle px-0 no-underline pb-8">{news.title}</h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold text-xs md:text-md">By: {news.author || "unknown"}</h2>
            <h2 className="font-bold pl-2 text-xs md:text-md md:max-w-md truncate">Source: <a href={news.url} className="hover:underline font-light italic">{news.url}</a></h2>
            <p className="pl-4 text-xs md:text-md">{news.publishedAt}</p>
          </div>
          <p className="pt-4">{news.description}</p>
        </div>
      </section> : <section className="flex items-center h-full sm:p-16 text-gray-800">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 text-gray-400">
        <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
        <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
        <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
        <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
      </svg>
      <p className="text-3xl">News not found</p>
      <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-orange-600 text-gray-50">Back to home</a>
    </div>
  </section>}
      <Footer/>
    </>
  );
}

export default Detail;