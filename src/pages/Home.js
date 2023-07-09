import React from 'react';
import Hero from '../Components/common/Hero';
import Services from '../Components/HomeComponents/Services';
import BestProducts from '../Components/HomeComponents/BestProducts';
import Trusted from '../Components/HomeComponents/Trusted';

const Home = () => {
  return (
    <div>
      <Hero />
      <BestProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home