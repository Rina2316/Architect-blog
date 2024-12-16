import { DetailedHTMLProps, HtmlHTMLAttributes} from "react";
import {Article} from "../../core/interfaces/article";

export interface ArticleCardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
	article:Article;
	
 }
 