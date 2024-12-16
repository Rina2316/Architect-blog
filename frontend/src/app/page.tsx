"use client"
import { useRef } from "react";
import Filter from "../components/Filter/Filter";
import styles from "../styles/home.module.scss";
import ImageComponent from "../components/ImageComponent/ImageComponent";
 import ArticleList from "../components/ArticleList/ArticleList";

export default function Home() {
  const articleListRef = useRef<HTMLDivElement>(null);

  const scrollToArticleList = () => {
    if (articleListRef.current) {
      articleListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return ( <div  className={styles.wrapper}>
    <ImageComponent  onScrollToArticles={scrollToArticleList}/> 
  <Filter/>

  <div ref={articleListRef}>
        <ArticleList />
      </div>
  </div>
  );
}
