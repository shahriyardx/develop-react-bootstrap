import React from "react"
import MainLayout from "../components/shared/MainLayout"
import Breadcrumb from "../components/shared/Breadcrumb"
import Services from "../components/shared/Services"
import Testimonials from "../components/about/Testimonials"

const ServicesPage = () => {
  const pageDescription = `Odio et unde deleniti. Deserunt numquam exercitationem. 
    Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum 
    debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
  `

  return (
    <MainLayout>
      <Breadcrumb title="Services" description={pageDescription} />
      <Services />
      <Testimonials />
    </MainLayout>
  )
}

export default ServicesPage
