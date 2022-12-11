import React from 'react'
import About from '../components/home/About'
import Clients from '../components/home/Clients'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Team from '../components/home/Team'
import MainLayout from '../components/shared/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Clients />
        <Team />
      </main>
    </MainLayout>
  )
}

export default Home