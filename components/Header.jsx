import ImageCarousel from "./Carousel";
import React, { useState,useEffect } from "react";

export default function Header() {
  const [news, setNews] = useState([]);
  const url = `https://api.jsonbin.io/v3/b/641c9221c0e7653a058ef5c0`;

  useEffect(() => {
    async function getNews() {
      try {
        const news = await fetch(url);
        const result = await news.json();
        console.log(result.record.articles);
        setNews(result.record.articles);
      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, []);

  return (
    <div className="container mx-auto mb-8">
      <ImageCarousel images={news} />
    </div>
  );
}
