import React from "react"
import Link from "next/link"

import { siteConfig } from "../../site.config"
import { SwitchTheme } from "./switchTheme"

export const Header: React.VFC = () => (
  <header className="w-screen h-[60px] relative md:fixed top-0 flex justify-center z-50 bg-white shadow-3xl">
    <h1 className="leading-[60px] text-sm">
      <Link href="/">
        <a className="md:text-xl font-bold">
          {`📚 ${siteConfig.siteData.title}`}
        </a>
      </Link>
    </h1>

    <ul className="absolute md:right-64 h-[60px]">
      <li className="md:text-xl font-bold">
        <Link href="/tags/">
          <a className="leading-[60px]">
            タグ一覧
          </a>
        </Link>
      </li>
    </ul>

    <SwitchTheme />
  </header>
)
