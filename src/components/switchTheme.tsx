import React, { useEffect, useState } from "react"

import * as Styles from "../styles/switchTheme.module.scss"

type Theme = "light" | "dark"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export const SwitchTheme = () => {
  const [theme, setTheme] = useState<Theme>("light")

  const initialize = () => {
    if (!localStorage.theme) {
      localStorage.setItem("theme", theme)
    }

    setTheme(localStorage.theme)
  }

  const clickHandle = () => {
    setTheme(() => theme === "light" ? "dark" : "light")
  }

  const toggleTheme = () => {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }

  useEffect(() => {
    initialize()
  }, [])

  useEffect(() => {
    toggleTheme()
  }, [theme])

  return (
    <button
      // className={Styles.button}
      className="absolute flex items-center top-1/2 -translate-y-1/2 right-4 md:right-48"
      onClick={clickHandle}
    >
      {theme === "light" ? (
        <FontAwesomeIcon
          icon={faSun}
          className="text-4xl text-orange-400"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="text-4xl text-yellow-400"
        />
      )}
    </button>
  )
}
