import { RelatedEntity } from "@/pages/PagePortfolioSingle/PagePortfolioSingle.types";

export interface RelatedContentProps {
  related: RelatedEntity[];
  type: "portfolio" | "blog";
  noRelated: boolean;
}
