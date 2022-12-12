import React from "react"
import MainLayout from "../components/shared/MainLayout"
import Breadcrumb from "../components/shared/Breadcrumb"
import AboutUs from "../components/about/AboutUs"
import Faq from "../components/about/Faq"
import Clients from "../components/home/Clients"
import Stats from "../components/about/Stats"

const About = () => {
  const pageDescription = `Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
  quo odio sint voluptas consequatur ut a odio voluptatem. Sit
  dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
  quaerat ipsum dolorem.`

  return (
    <MainLayout>
      <Breadcrumb title="About" description={pageDescription} />
      <AboutUs />
      <Faq />
      <Clients />
      <Stats />
    </MainLayout>
  )
}

export default About
