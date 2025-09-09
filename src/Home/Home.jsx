import React from 'react'
import Slider1 from './Slider1'
import KeyPoints from './KeyPoints'
import Ads from './Ads'
import Work from './Work'
import Featured from './Featured'
import LimitedTimeOffer from './LimitedTimeOffer'
import Brands from './Brands'
import Footer from '../Footer/Footer'
import Footer1 from '../Footer/Footer1'


function Home() {
    
  return (
   <div>
    <Slider1/>
    <KeyPoints/>
    <Ads/>
    <Work/>
    <Featured/>
    <LimitedTimeOffer/>
    <Brands/>
    {/* <Footer/> */}
    <Footer1/>
   </ div>
  )
}

export default Home
