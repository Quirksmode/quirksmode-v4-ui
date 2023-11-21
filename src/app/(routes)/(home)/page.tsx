import { fetchPageHomeData } from "@/pages/PageHome/PageHome.services";
import PageHome from "../../pages/PageHome/PageHome";
import type { Metadata } from "next";
import { getMetaData } from "@/utils/getMetaData";

export const generateMetadata = async (): Promise<Metadata> =>
  getMetaData(fetchPageHomeData());

const PageComponent = () => {
  return <PageHome />;
};

PageComponent.displayName = "PageHome";
export default PageComponent;
