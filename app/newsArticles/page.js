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
      <h1 className="text-offBlack font-bold ">Market News</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Company Ticker:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <section className="flex min-h-screen flex-col items-center">
        <h2>Articles</h2>
        {Array.isArray(articles) ? (
          articles.map((article) => (
            <Article
              key={article.uuid}
              title={article.title}
              description={article.description}
              image_url={article.image_url}
              published_at={article.published_at}
            />
          ))
        ) : (
          <p>No articles available</p>
        )}
      </section>
    </main>
  );
};

export default Page;
