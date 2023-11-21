import { PagePortfolioData } from "./PagePortfolio.types";

export const fetchPagePortfolioData = async ({ cat = "all", tag = "all" }) => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/portfolio?cat=${cat}&tag=${tag}`
  );

  const pagePortfolioData: PagePortfolioData = await res.json();

  return pagePortfolioData;
};
