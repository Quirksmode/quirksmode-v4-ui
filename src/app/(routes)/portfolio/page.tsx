import { PageSearchParams } from "@/pages/Page/Page.types";
import PagePortfolio from "@/pages/PagePortfolio/PagePortfolio";
import { fetchPageBlogData } from "@/pages/PageBlog/PageBlog.services";
import { getMetaData } from "@/utils/getMetaData";
import { Metadata } from "next";

export const generateMetadata = async ({
  searchParams,
}: PageSearchParams): Promise<Metadata> =>
  getMetaData(fetchPageBlogData(searchParams));

const PageComponent = ({ searchParams }: PageSearchParams) => {
  return <PagePortfolio searchParams={searchParams} />;
};

PageComponent.displayName = "PagePortfolio";
export default PagePortfolio;
