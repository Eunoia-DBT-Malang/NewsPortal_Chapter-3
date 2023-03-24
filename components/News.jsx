import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewsCard from "./NewsCard";

function News() {
  const [search, setSearch] = useState("");
  const [isLoading] = useState(false);
  const [q] = useState("");
  const [searchParam] = useState(["name", "description", "category"]);
  //   const [labelCategory] = useState([
  //     { value: "All", label: "All (Filter By Category)" },
  //     { value: "general", label: "General" },
  //     { value: "business", label: "Business" },
  //     { value: "entertainment", label: "Entertainment" },
  //     { value: "health", label: "Health" },
  //     { value: "sceince", label: "Sceince" },
  //     { value: "sports", label: "Sports" },
  //     { value: "technology", label: "Technology" },
  //   ]);
  const [filterParam, setFilterParam] = useState("All");
  const [news, setNews] = useState([]);
  //   const [originalNews, setOriginalNews] = useState([]);

  const url =
    `https://api.jsonbin.io/v3/b/641c9221c0e7653a058ef5c0`;

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

  //   const filterType = async (category) => {
  //     try {
  //       await setFoods(
  //         originalFoods.filter((item) => {
  //           return item.category === category;
  //         })
  //       );
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

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
          return value.title.toLowerCase().match(new RegExp(searchTerm, "g"));
        });
      } else if (search !== "" && filterParam !== "All") {
        filteredNews = news.filter((value) => {
          return (
            value.title.toLowerCase().match(new RegExp(searchTerm, "g")) &&
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
    <div className="container mx-auto mt-32">
      <div className="flex flex-col mx-[10%]">
        <div>
          <Header/>
          <form className="max-w-6xl mx-auto flex justify-between items-center px-5 -mt-60 md:-mt-40 lg:-mt-12">
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
          <div className="max-w-lg rounded overflow-hidden mx-auto mt-0">
            {/* <div className="place-items-center">
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
            </div> */}
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
          <main
            className="grid 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            p-10 gap-10"
          >
            {news.map((image) => (
              <NewsCard key={image.id} image={image} coba={image.image} />
            ))}
          </main>
        )}
      </div>
    </div>
  );
}

export default News;
