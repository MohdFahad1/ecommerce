import React from 'react';
import Hero from '../Components/common/Hero';
import Services from '../Components/HomeComponents/Services';
import BestProducts from '../Components/HomeComponents/BestProducts';
import Trusted from '../Components/HomeComponents/Trusted';

const Home = () => {
  const data = {
    name: "Store"
  }
  return (
    <div>
      <Hero myData={data}/>
      <BestProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home