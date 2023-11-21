import { Hero } from "@/pages/PagePortfolioSingle/PagePortfolioSingle.types";

export interface HeroProps {
  hero: Hero;
  title: string;
  subtitle?: string;
  url: string;
  type: "portfolio" | "blog";
}
