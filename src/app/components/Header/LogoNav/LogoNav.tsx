import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoNavProps } from "./LogoNav.types";
import { useAppStore } from "@/App.store";

const LogoNav: React.FC<LogoNavProps> = ({ navItems, siteSettings }) => {
  let pathname = usePathname();
  pathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const setUtility = useAppStore((state) => state.setUtility);

  if (!siteSettings || !navItems) return null;

  const { mainLogo } = siteSettings;

  const handleClick = () => {
    setUtility({
      isNavToggled: false,
      isSearchToggled: false,
      isMenuBtnToggled: false,
    });
  };

  return (
    <div className="LogoNav">
      {mainLogo?.sizes.image && (
        <Link className="LogoNav__logo" href="/">
          <picture data-test="logo">
            <source
              type="image/webp"
              srcSet={`${mainLogo.sizes.image}.webp 1x, ${mainLogo.sizes.image2x}.webp 2x`}
            />
            <img
              className="img--responsive"
              srcSet={`${mainLogo.sizes.image} 1x, ${mainLogo.sizes.image2x} 2x`}
              src={mainLogo.sizes.image}
              alt={mainLogo.alt}
              width={mainLogo.width}
              height={mainLogo.height}
              loading="lazy"
            />
          </picture>
        </Link>
      )}
      <nav className="LogoNav__nav">
        <p className="visuallyHidden">
          <strong>Main Navigation</strong>
        </p>
        <ul className="LogoNav__nav__items">
          {navItems.map((item) => {
            const itemSlug =
              pathname === "/" ? item.slug : item.slug.replace(/\/$/, "");
            const isSelected =
              itemSlug.split("/")[1] === pathname.split("/")[1];

            return (
              <li className="LogoNav__nav__item" key={item.id}>
                <Link
                  onClick={() => handleClick()}
                  className={`LogoNav__nav__link${
                    isSelected ? " selected" : ""
                  }`}
                  href={item.slug}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default LogoNav;
