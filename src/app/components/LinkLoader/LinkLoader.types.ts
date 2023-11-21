import { ReactNode } from "react";

export interface LinkLoaderProps {
  type?: "page" | "blog" | "portfolio";
  title?: string;
  slug: string;
  children: ReactNode;
}
