import React from 'react'
import Hero from '../Components/common/Hero'
import Services from '../Components/HomeComponents/Services'
import BestProducts from '../Components/HomeComponents/BestProducts'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestProducts />
      <Services />
    </div>
  )
}

export default Home