import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CssBaseline from '@mui/material/CssBaseline';
import Router from "next/router";

import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from "next-auth/react"

import theme from "../src/theme";
import Loader from "../src/components/Loader";

import Fetcher from "../src/scripts/fetcher";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [loading, setLoading] = React.useState(false);
  // Router and fetcher , using useEffects
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    window.scrollTo(0, 0);
  });
  Router.events.on("routeChangeError", () => setLoading(false));

  Fetcher.events.on("fetchStart", () => setLoading(true));
  Fetcher.events.on("fetchEnd", () => setLoading(false));

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  // Render app Repuestos Hot
  return (
    <React.Fragment>
      <Head>
        {/* header app - tab name */}
        <title>Gio makeUp</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={pageProps.session}>
          <Loader loading={loading} />
          <Component {...pageProps} />
        </SessionProvider >
      </ThemeProvider>
    </React.Fragment >
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
