"use client";
import React, { useState, useEffect } from "react";
import Article from "./components/article";

const Page = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const fetchArticles = (query) => {
    fetch(
      `https://api.marketaux.com/v1/news/all?symbols=${query}&filter_entities=true&limit=3&language=en&api_token=IbBUa3WjsiRHp8LdictXNbzePTN1iLaeMWbYCUQH`
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract the 'data' array from the response
        const articlesData = data.data || [];
        setArticles(articlesData); // Set articlesData to state
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setArticles([]); // Set articles to an empty array in case of an error
      });
  };

  useEffect(() => {
    fetchArticles("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArticles(query);
  };

  return (
    <main className="bg-beige">
      <div className="flex row-auto">
        <img
          className="ml-4 mt-4"
          src="https://img.icons8.com/dusk/64/small-business.png"
          alt="Logo"
        />
        <h1 className="text-offBlack font-bold font-sans text-4xl mt-9 ml-2 ">
          Market News
        </h1>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Enter Company Ticker e.g. AAPL"
              required
            ></input>
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <section className="flex min-h-screen flex-col items-center">
        <h2 className="text-offBlack font-bold my-6 text-2xl font-sans">
          Articles
        </h2>
        {Array.isArray(articles) ? (
          articles.map((article) => (
            <Article
              key={article.uuid}
              title={article.title}
              description={article.description}
              image_url={article.image_url}
              published_at={article.published_at}
              url={article.url}
            />
          ))
        ) : (
          <p className="font-sans">No articles available</p>
        )}
      </section>
    </main>
  );
};

export default Page;
