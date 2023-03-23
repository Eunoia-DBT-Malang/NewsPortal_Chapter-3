import React, { useEffect, useState } from "react";
// import { data } from "@/data/data";
import ImageCard from "./ImageCard";

function News() {
  const [search, setSearch] = useState("");
  const [isLoading] = useState(false);
  const [q] = useState("");
  const [searchParam] = useState(["name", "description", "category"]);
  const [labelCategory] = useState([
    { value: "All", label: "All (Filter By Category)" },
    { value: "Ready", label: "Ready" },
    { value: "Barang Bekas", label: "Barang Bekas" },
    { value: "Pre-Order", label: "Pre-Order" },
  ]);
  const [filterParam, setFilterParam] = useState("All");
  const [news, setNews] = useState([])

  const url = 'https://newsapi.org/v2/top-headlines/sources?apiKey=0434c0eca2b946889dea2b478ee7e562'
  useEffect(() => {
    async function getNews() {
      try {
        const news = await fetch(url)
        const result = await news.json()
        setNews(result.sources)
      } catch (error) {
        console.log(error)
      }
    }
    getNews()
  }, [])

  function cari(news) {
    isLoading(true);
    return news.filter((item) => {
      if (news.category == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
      isLoading(false);
    });
  }

  useEffect(() => {
    const searchTerm = search.toLowerCase();
    let filteredNews;
    if (search === "" && filterParam === "All") {
      setNews(news);
    } else {
      if (search !== "" && filterParam === "All") {
        filteredNews = news.filter((value) => {
          return value.name.toLowerCase().match(new RegExp(searchTerm, "g"));
        });
      } else if (search !== "" && filterParam !== "All") {
        filteredNews = news.filter((value) => {
          return (
            value.name.toLowerCase().match(new RegExp(searchTerm, "g")) &&
            value.category === filterParam
          );
        });
      } else if (search === "" && filterParam === "All") {
        filteredNews = news.filter((value) => {
          return value.category === filterParam;
        });
      } else if (search === "" && filterParam !== "All") {
        filteredNews = news.filter((value) => {
          return value.category === filterParam;
        });
      }
      setNews(filteredNews);
    }
  }, [filterParam, search]);

  useEffect(() => {
    setNews(news);
  }, []);

  return (
    <div className="container mx-auto mt-60">
      <div className="flex flex-col">
        <div>
          <form
            className="max-w-6xl 
    mx-auto flex justify-between items-center px-5 mb-2"
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 
              rounded-sm placeholder-gray-500 
              text-gray-500 outline-none flex-1 bg-transparent
               dark:text-orange-400"
              type="text"
              placeholder="Search News..."
            />
            <div className="text-gray-500 text-md">
              <p>{news.length} News found</p>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-lg rounded overflow-hidden my-4 mx-auto mt-0 space-x-4">
        <div className="place-items-center">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="custom-select px-4 py-3 rounded-md bg-white/70 text-gray-500"
            aria-label="Filter News By Category"
          >
            {labelCategory.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
          <span className="focus"></span>
        </div>
      </div>
      {isLoading && (
        <div className="animated-pulse font-serif text-lg text-gray-400 text-center p-10">
          Loading News Feed...
        </div>
      )}
      {!isLoading && news.length === 0 && (
        <div className="animated-pulse font-serif text-lg text-gray-400 text-center p-10">
        No News Found
      </div>
      )}
      {news.length !== 0 && (
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {news.map((image) => (
            <ImageCard key={image.id} image={image} coba={image.image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
