import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Header from "./Header";
import NewsCard from "./NewsCard";
import TopTopics from "./TopTopics";

function News() {
  const [search, setSearch] = useState("");
  const [isLoading] = useState(false);
  const [q] = useState("");
  const [searchParam] = useState(["name", "description", "category"]);
  const [currentPage, setCurrentPage] = useState(0);
  const [newsPerPage] = useState(6);
  const [filterParam, setFilterParam] = useState("All");
  const [news, setNews] = useState([]);

  const url = `https://api.jsonbin.io/v3/b/641c9221c0e7653a058ef5c0`;

  useEffect(() => {
    async function getNews() {
      try {
        const news = await fetch(url);
        const result = await news.json();
        setNews(result.record.articles);
      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, []);

  function paginate() {
    const startIndex = currentPage * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const currentNews = news.slice(startIndex, endIndex);
    return currentNews;
  }

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
    <div className="container mx-auto">
      <div className="flex flex-col mx-[10%]">
        <div>
          <Header />
          <TopTopics />
          <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
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
          <div className="max-w-lg rounded overflow-hidden mx-auto mt-0"></div>
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
            {paginate().map((image) => (
              <NewsCard key={image.id} image={image} coba={image.image} />
            ))}
          </main>
        )}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={Math.ceil(news.length / newsPerPage)}
          onPageChange={(data) => {
            setCurrentPage(data.selected);
          }}
          containerClassName={"pagination"}
          previousLinkClassName={"previous_page"}
          nextLinkClassName={"next_page"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
          className="mx-auto text-center flex flex-row gap-4 mb-8"
        />
      </div>
    </div>
  );
}

export default News;
