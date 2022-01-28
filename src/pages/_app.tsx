import '../scss/_global.scss'
import type { AppProps } from 'next/app'

import { Layout } from "../components/layout"
import { Header } from "../components/header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
