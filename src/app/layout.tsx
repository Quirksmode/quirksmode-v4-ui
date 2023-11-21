import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Utility from "@/components/Utility/Utility";
import Subfooter from "@/components/Subfooter/Subfooter";
import Footer from "@/components/Footer/Footer";
import { fetchPageHomeData } from "@/pages/PageHome/PageHome.services";
import { fetchAppData } from "./App.services";
import AppStoreInit from "./AppStoreInit";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appData = await fetchAppData();
  const pageHomeData = await fetchPageHomeData();
  const { heroSlides } = pageHomeData.content;
  const { navItems, siteSettings, subfooter, footerNavItems } = appData;

  return (
    <html className="no-js" lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cc2d32" />
      <meta name="msapplication-TileColor" content="#cc2d32" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:locale" content="en_UK" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@quirksmode_uk" />
      <meta name="twitter:site" content="@quirksmode_uk" />
      <Script id="inline-head-script">
        {`let docEl=document.documentElement;docEl.className=docEl.className.replace( /(?:^|s)no-js(?!S)/g , ' js' );let isTouch="ontouchstart"in docEl;isTouch?docEl.classList.add("touch"):docEl.classList.add("no-touch"),function(e){"use strict";function t(t){if(t){var s=e.documentElement;s.classList?s.classList.add("webp"):s.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))t(!0);else{var s=new Image;s.onload=s.onerror=function(){e(2===s.height)},s.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(t)}(document);`}
      </Script>
      <body>
        <AppStoreInit
          utility={{
            isNavToggled: false,
            isSearchToggled: false,
            isMenuBtnToggled: false,
          }}
        />
        {navItems && (
          <Utility navItems={navItems} siteSettings={siteSettings} />
        )}
        {heroSlides && navItems && (
          <Header
            heroSlides={heroSlides}
            navItems={navItems}
            siteSettings={siteSettings}
          />
        )}
        {children}
        {subfooter && <Subfooter subfooter={subfooter} />}
        {subfooter && footerNavItems && (
          <Footer footerNavItems={footerNavItems} />
        )}
      </body>
    </html>
  );
}
