import { AppProps } from "next/app"
import Link from "next/link"
import "../styles/global.scss"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <div>
      <header>
        <h1>My Website</h1>
      </header>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Component {...pageProps} />
      </main>
    </div>

    <footer>
      <div>
        Powered by <a href="https://nextjs.org/">Next.js</a>
      </div>
    </footer>
  </>
)

export default MyApp