import { PageSearchParams } from "@/pages/Page/Page.types";
import PageBlog from "@/pages/PageBlog/PageBlog";
import { fetchPageBlogData } from "@/pages/PageBlog/PageBlog.services";
import { getMetaData } from "@/utils/getMetaData";
import { Metadata } from "next";

export const generateMetadata = async ({
  searchParams,
}: PageSearchParams): Promise<Metadata> =>
  getMetaData(fetchPageBlogData(searchParams));

const PageComponent = ({ searchParams }: PageSearchParams) => {
  return <PageBlog searchParams={searchParams} />;
};

PageComponent.displayName = "PageBlog";
export default PageBlog;
