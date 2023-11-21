import {
  NavItemsEntityOrFooterNavItemsEntity,
  SiteSettings,
} from "@/App.types";
import { HeroSlidesEntity } from "@/pages/PageHome/PageHome.types";
import Swiper from "swiper";

export interface HeaderProps {
  heroSlides: HeroSlidesEntity[];
  navItems: NavItemsEntityOrFooterNavItemsEntity[];
  siteSettings: SiteSettings;
}

export type SwiperRef = HTMLDivElement & { swiper?: Swiper };
