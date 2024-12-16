import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Article } from "../../core/interfaces/article";

export interface ArticleListProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	articles: Article[];
 }
 
