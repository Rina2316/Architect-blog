
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface CustomButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
	onClick?: () => void;
	children: React.ReactNode; 
	variant: 'primary' | 'secondary'; 
	size:"s"|'m';
	className?:string;

}