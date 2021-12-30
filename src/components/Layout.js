import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import CookieConsent from "react-cookie-consent";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/svg"
          href={`${withPrefix("/")}img/favicon-32x32.svg`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/svg"
          href={`${withPrefix("/")}img/favicon-16x16.svg`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <CookieConsent
        location='bottom'
        buttonText='Accept'
        enableDeclineButton={true}
        declineButtonText='Decline'
        cookieName='gatsby-gdpr-google-analytics'
        onAccept={(acceptedByScrolling) => {
          initializeAndTrack(window.location);
        }}
      >
        This site uses cookies because I'm curious how tracking works
      </CookieConsent>
    </div>
  );
};

export default TemplateWrapper;
