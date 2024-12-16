export interface Article {
	id: number;
	title: string;
	description: string;
	cover?: Array<{
	  id: number;
	  url: string;
	}> | null; 
 }
 
 export interface ApiResponseItem {
	id: number;
	title: string;
	description: string;
	cover?: Array<{
	  attributes?: {
		 url?: string;
	  };
	}> | null;
 }
 
 