import React from "react"
import Link from "next/link"

import * as Styles from "../styles/header.module.scss"

export const Header: React.VFC = () => (
  <header className={Styles.header}>
    <h1 className={Styles.headerTitle}>
      <Link href="/">
        📚 怪文書置き場
      </Link>
    </h1>
  </header>
)
