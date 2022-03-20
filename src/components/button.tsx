import Link from "next/link"

import * as Styles from "../styles/button.module.scss"

export const Button = () => (
  <div className={Styles.buttonWrapper}>
    <Link href="/">
      <a className={Styles.button}>
        HOME
      </a>
    </Link>
  </div>
)
