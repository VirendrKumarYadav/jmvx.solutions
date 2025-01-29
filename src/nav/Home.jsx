import React from 'react'
import Header from '../componants/Header'
import CarouselComponent from "../componants/CarouselComponent";
import JMVAdvertising from "../componants/JMVAdvertising";
import ServicesOverview from "../componants/ServicesOverview";
function Home() {
  return (
    <div id='bg-image'>
      <Header />
      <CarouselComponent />
      <JMVAdvertising />
      <ServicesOverview/>
    </div>
  )
}

export default Home
