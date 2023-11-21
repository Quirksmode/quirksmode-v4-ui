import PageAbout from "@/pages/PageAbout/PageAbout";
import { fetchPageAboutData } from "@/pages/PageAbout/PageAbout.services";
import { getMetaData } from "@/utils/getMetaData";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> =>
  getMetaData(fetchPageAboutData());

const PageComponent = () => {
  return <PageAbout />;
};

PageComponent.displayName = "PageAbout";
export default PageComponent;
