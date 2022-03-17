import React from "react"
import Link from "next/link"

import { SwitchTheme } from "./switchTheme"

import * as Styles from "../styles/header.module.scss"

export const Header: React.VFC = () => (
  <header className={Styles.header}>
    <h1 className={Styles.headerTitle}>
      <Link href="/">
        📚 怪文書置き場
      </Link>
    </h1>

    <ul className={Styles.linkList}>
      <li className={Styles.listItem}>
        <Link href="/authors/">作成者一覧</Link>
      </li>
      <li className={Styles.listItem}>
        <Link href="/tags/">タグ一覧</Link>
      </li>
    </ul>

    <SwitchTheme />
  </header>
)
