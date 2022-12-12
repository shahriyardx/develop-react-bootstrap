import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const Topbar = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("develop_theme") || "light"
  )

  const toggleMode = () => {
    const modes = {
      dark: "light",
      light: "dark",
    }
    const newMode = modes[mode] || "light"

    localStorage.setItem("develop_theme", newMode)
    document.querySelector("html").setAttribute("theme", `${newMode}-mode`)
    setMode(newMode)
  }

  useEffect(() => {
    const theme = localStorage.getItem("develop_theme") || 'light'
    document.querySelector("html").setAttribute("theme", `${theme}-mode`)
  }, [])

  return (
    <section id="topbar" className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">contact@example.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>+1 5589 55488 55</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="#" onClick={() => toggleMode()}>
            {mode === "dark" ? (
              <i className="bi bi-sun"></i>
            ) : (
              <i className="bi bi-moon"></i>
            )}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Topbar
