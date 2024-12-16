import React from "react"; 
import styles from "./ArticleCard.module.scss";
import Link from "next/link";
import Image from "next/image"; 
import { ArticleCardProps } from "./ArticleCard.props";



const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, description, cover } = article;

  console.log("Cover data:", cover);

  return (
    <Link href={`/article/${title}`} passHref>
      <div className={styles.card}>
        {cover && cover.length > 0 && cover[0].url && (
          <Image
            src={`http://localhost:1337${cover[0].url}`} 
            alt={title || "Article image"}
            width={580}
            height={360}
            className={styles.image}
            onError={(e) => console.error("Image load error:", e)}
          />
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{truncateText(description, 250)}</p> 
      </div>
    </Link>
  );
};

export default ArticleCard;
