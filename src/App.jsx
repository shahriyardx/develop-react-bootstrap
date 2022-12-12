import AOS from "aos"
import React from "react"
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home.page"
import AboutPage from "./pages/About.page"
import ServicesPage from "./pages/Services.page"
import TeamPage from "./pages/Team.page"

import "aos/dist/aos.css"
import BlogPage from "./pages/Blog.page"
import ContactPage from "./pages/Contact.page"

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
