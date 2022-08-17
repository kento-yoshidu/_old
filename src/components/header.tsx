import React from "react"
import Link from "next/link"

import { siteConfig } from "../../site.config"
import { SwitchTheme } from "./switchTheme"

import * as Styles from "../styles/header.module.scss"

export const Header: React.VFC = () => (
  <header className="w-screen h-20 relative md:fixed top-0 flex justify-center md:content-center z-50 bg-white shadow-3xl">
    <h1 className="md:text-4xl">
      <Link href="/">
        {`📚 ${siteConfig.siteData.title}`}
      </Link>
    </h1>

    <ul className={Styles.linkList}>
      <li className={Styles.listItem}>
        <Link href="/tags/">タグ一覧</Link>
      </li>
    </ul>

    <SwitchTheme />
  </header>
)
