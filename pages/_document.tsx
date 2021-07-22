import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { ServerStyleSheet as ScServerStyleSheet } from "styled-components";
import theme from "../src/theme";

/**
 * Custom document configuration based on:
 * https://github.com/vercel/next.js/tree/master/examples/with-styled-components
 * https://github.com/mui-org/material-ui/tree/master/examples/nextjs
 */

export default class _Document extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const scSheets = new ScServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            scSheets.collectStyles(sheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [sheets.getStyleElement(), scSheets.getStyleElement()],
      };
    } finally {
      scSheets.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
