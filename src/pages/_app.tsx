import Head from "next/head"

import "../scss/_global.scss"
import type { AppProps } from "next/app"

import { Layout } from "../components/layout"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#f9a8d4" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Footer />
    </>
  )
}

export default MyApp
