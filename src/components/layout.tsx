import React from "react"

import * as Styles from "../styles/layout.module.scss"

interface Props {
  children: React.ReactNode
}

export const Layout: React.VFC<Props> = ({ children }) => (
  <div className={Styles.layout}>
    { children }
  </div>
)