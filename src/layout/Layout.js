import VideoPopup from "@/components/popup/VideoPopup";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import {
  animationText,
  dataBgImg,
  imgToSVG,
  neoh_fn_moving_blog,
  progressTotop,
  stickyNav,
} from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";

const Layout = ({ children, pageName, hideHeader }) => {
  useEffect(() => {
    animationText();
    neoh_fn_moving_blog();
    dataBgImg();

    // imgToSVG();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", progressTotop);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="google-site-verification" content="vfDp6LRtz-bAvSxysH7dh0Y7UpgFPXMfLPutdJCLv9I" />
        <title>{`TWS | ${pageName}`}</title>

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={`TWS | ${pageName}`} />
        <meta property="og:description" content="Transylvania Web3 Summit" />
        <meta property="og:image" content="/img/main.png" />
        <meta property="og:url" content="https://transylvaniasummit.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`TWS | ${pageName}`} />
        <meta name="twitter:description" content="Transylvania Web3 Summit" />
        <meta name="twitter:image" content="/img/main.png" />

        {/* Fallback for older platforms */}
        <meta name="description" content="Transylvania Web3 Summit" />
      </Head>

      <VideoPopup />
      <div className="neoh_fn_main">
        {!hideHeader && <Header />}
        <div className="neoh_fn_content">{children}</div>
        <Footer />
        <ScrollTop />
      </div>

      <div className="neoh_fn_moving_box"></div>
    </Fragment>
  );
};

export default Layout;

