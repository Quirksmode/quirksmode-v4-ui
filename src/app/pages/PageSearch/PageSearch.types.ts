import { Metadata } from "../Page/Page.types";
import { FeaturedImage } from "@/components/Frame/Frame.types";

export interface PageSearchData {
  content: Content;
  metadata: Metadata;
}

export interface Content {
  title: string;
  searchPosts?: SearchPostsEntity[];
}

export interface SearchPostsEntity {
  postID: number;
  postName: string;
  postTitle: string;
  postExcerpt: string;
  type: "page" | "blog" | "portfolio";
  date: string;
  featuredImage: FeaturedImage;
}

type SearchParams = {
  s: string;
};

export interface PageSearchSearchParams {
  searchParams: SearchParams;
}
