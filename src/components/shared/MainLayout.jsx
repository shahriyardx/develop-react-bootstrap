import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Topbar from "./Topbar"

const MainLayout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Header />

      {children}

      {/* <div id="preloader"></div> */}
      <Footer />
    </div>
  )
}

export default MainLayout
