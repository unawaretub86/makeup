import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheets.collect(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
      };
    } finally {
      // Clean up the styling injection
      // sheets.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ThemeProvider theme={createTheme(/* add your theme configuration here */)}>
            <CssBaseline />
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
