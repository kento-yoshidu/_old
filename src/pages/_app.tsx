import Head from "next/head"

import "tailwindcss/tailwind.css"
import "../scss/_global.scss"

import { Layout } from "../components/layout"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#f9a8d4" />
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
