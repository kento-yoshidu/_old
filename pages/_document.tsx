import Document, { Head, Html, Main, NextScript } from "next/document";
import Nav from "../components/nav"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />

        <Nav />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;