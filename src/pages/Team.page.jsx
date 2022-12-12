import React from 'react'
import Breadcrumb from '../components/shared/Breadcrumb'
import MainLayout from '../components/shared/MainLayout'
import Team from '../components/shared/Team'

const TeamPage = () => {
  const pageDescription = `Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.`

  return (
    <MainLayout>
      <Breadcrumb title="Team" description={pageDescription} />
      <Team />
    </MainLayout>
  )
}

export default TeamPage