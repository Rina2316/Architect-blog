"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axiosClient from "../../../core/axiosClient";
import Image from "next/image";
import style from "../styles/article.module.scss";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import Filter from "../../../components/Filter/Filter";
import { Article, ApiResponseItem } from "../../../core/interfaces/article";


const transformToArticle = (apiItem) => {
  
console.log("data", apiItem)
  return {
    ...apiItem,
    cover: apiItem.cover?.map(item => ({
      id: item.id ?? Math.random(),  
      url: item.url ?? "",  
    })) || [] 
  };
};

const ArticlePage = () => {
  const params = useParams();
  const { title } = params;
  
  const articleTitle = title ? decodeURIComponent(Array.isArray(title) ? title[0] : title) : "Untitled";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosClient.get("/articles?populate=cover");
        const fetchedArticles: ApiResponseItem[] = response.data.data.map((item: ApiResponseItem) => ({
          id: item.id,
          title: item.title || "Untitled",
          description: item.description || "No description",
          cover: item.cover,
        }));

        console.log("Full API Response:", fetchedArticles);

        console.log("Requested Article Title:", articleTitle);

        const foundArticle = fetchedArticles.find((article: ApiResponseItem) => article.title === articleTitle);
        console.log("Found Article:", foundArticle); 

        setCurrentArticle(foundArticle ? transformToArticle(foundArticle) : null);

        if (!foundArticle) {
          console.warn(`Article with title "${articleTitle}" not found.`);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching articles:", error.message);
          setError("Error loading articles.");
        } else {
          console.error("Unexpected error:", error);
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [articleTitle]);

  if (loading) {
    return (
      <div>
        <ImageComponent />
        <Filter />
        <div>Loading article...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ImageComponent />
        <Filter />
        <div>Error: {error}</div>
      </div>
    );
  }

  if (!currentArticle) {
    return (
      <div>
        <ImageComponent />
        <Filter />
        <div>Article not found</div>
      </div>
    );
  }

  const { description, cover } = currentArticle;

  return (
    <div>
      <ImageComponent />
      <Filter />
<div className={style.mainWrapper}>
{cover && cover.length > 0 && cover[0].url && (
                <Image
                  src={`http://localhost:1337${cover[0].url}`} 
          alt={articleTitle || "Article image"}
          width={1037}
          height={687}
          className={style.articleImage}
        />
      )}
      <section  className={style.text}>
      <h1>{articleTitle}</h1>
      <p>{description}</p>
      </section>
</div>
     
    </div>
  );
};

export default ArticlePage;
