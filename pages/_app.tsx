import { AppProps } from "next/app"
import Link from "next/link"
import Nav from "./components/nav"
import "../styles/global.scss"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Nav />
    <main className="main">
      <Component {...pageProps} />
    </main>
  </>
)

export default MyApp