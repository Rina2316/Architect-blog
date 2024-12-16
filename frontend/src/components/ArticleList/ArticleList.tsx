import React, { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./ArticleList.module.scss";
import axiosClient from "../../core/axiosClient";
import { Article, ApiResponseItem } from "../../core/interfaces/article";
import axios from "axios";


const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosClient.get("/articles?populate=cover");
        console.log("Full API Response:", response.data);

        const fetchedArticles = response.data.data.map((item: ApiResponseItem) => ({
          id: item.id,
          title: item.title || "Untitled",
          description: item.description || "No description",
          cover: item.cover, 
        }));
        setArticles(fetchedArticles);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error loading articles:", error.response?.data || error.message);
          setError("Error loading data");
        } else {
          console.error("Unexpected error:", error);
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (articles.length === 0) {
    return <p>There are no articles yet.</p>;
  }

  return (
    <div className={styles.gridContainer}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
