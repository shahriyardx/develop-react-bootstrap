import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  const headerRef = useRef()
  const [open, setOpen] = useState(false)
  const [sticked, setSticked] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
    document.querySelector("body").classList.toggle("mobile-nav-active")
  }

  useEffect(() => {
    const selectHeader = headerRef.current

    if (window && headerRef.current) {
      let headerOffset = selectHeader.offsetTop
      let nextElement = selectHeader.nextElementSibling

      document.addEventListener("scroll", () => {
        if (headerOffset - window.scrollY <= 0) {
          setSticked(true)
          nextElement ?? nextElement.classList.add("sticked-header-offset")
        } else {
          setSticked(false)
          selectHeader.classList.remove("sticked")
          nextElement ?? nextElement.classList.remove("sticked-header-offset")
        }
      })
    }
  }, [])
  return (
    <header
      ref={headerRef}
      id="header"
      className={`header d-flex align-items-center ${sticked && "sticked"}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <h1>
            Develop<span>.</span>
          </h1>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {open ? (
          <i
            onClick={(e) => toggleMenu()}
            className="mobile-nav-toggle mobile-nav-hide bi bi-x"
          ></i>
        ) : (
          <i
            onClick={(e) => toggleMenu()}
            className="mobile-nav-toggle mobile-nav-show bi bi-list"
          ></i>
        )}
      </div>
    </header>
  )
}

export default Header
