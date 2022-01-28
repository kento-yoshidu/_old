import '../scss/_global.scss'
import type { AppProps } from 'next/app'

import { Layout } from "../components/layout"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Footer />
    </>
  )
}

export default MyApp
