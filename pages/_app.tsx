import { Fragment, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider as ScThemeProvides } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import theme from "../src/theme";

const _App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  });

  return (
    <Fragment>
      <Head>
        <title key="title">Title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ScThemeProvides theme={theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <Component {...pageProps} />
          </StylesProvider>
        </ScThemeProvides>
      </ThemeProvider>
    </Fragment>
  );
};

export default _App;
