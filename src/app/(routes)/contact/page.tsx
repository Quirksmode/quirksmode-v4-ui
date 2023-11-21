import PageContact from "@/pages/PageContact/PageContact";
import type { Metadata } from "next";
import { getMetaData } from "@/utils/getMetaData";
import { fetchPageContactData } from "@/pages/PageContact/PageContact.services";

export const generateMetadata = async (): Promise<Metadata> =>
  getMetaData(fetchPageContactData());

const PageComponent = () => {
  return <PageContact />;
};

PageComponent.displayName = "PageContact";
export default PageComponent;
