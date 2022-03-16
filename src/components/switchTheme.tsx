import React, { useEffect, useState } from "react"

type Theme = "light" | "dark"

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
    <button onClick={clickHandle}>
      CLick ME
    </button>
  )
}
