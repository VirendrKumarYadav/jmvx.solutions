import React from 'react'
import Header from '../componants/Header'
import CarouselComponent from "../componants/CarouselComponent";
import JMVAdvertising from "../componants/JMVAdvertising";
import ServicesOverview from "../componants/ServicesOverview";
import Welcome from '../componants/Welcome';
import Team from '../componants/Team';
import Clients from '../componants/Client';
import Portfolio from '../componants/Portfoilo';
import Testimonials from '../componants/Testimonials';
import Footer from '../componants/Footer';
import OurMission from '../componants/OurMisson';
import LeadershipTeam from '../componants/LeadershipTeam';
function Home() {
  return (
    <div id='bg-image'>
      <Header />
      <Welcome/>
      <Team/>
      <Clients/>
      <Portfolio/>
      <Testimonials/>
      <OurMission/>
      <LeadershipTeam/>
      <Footer />
      
      {/* <CarouselComponent /> */}
      {/* <JMVAdvertising /> */}
      {/* <ServicesOverview/> */}
    </div>
  )
}

export default Home
