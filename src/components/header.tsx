import React from "react"

import * as Styles from "../styles/header.module.scss"

export const Header: React.VFC = () => (
  <header className={Styles.header}>
    <h1 className={Styles.headerTitle}>📚 怪文書置き場</h1>
  </header>
)
