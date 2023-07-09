import React from 'react';
import hero from '../../Assets/hero.png';

const Hero = () => {
  return (
    <div className="flex justify-around md:px-32 items-center gap-10 py-4 px-0">
      <div className="md:text-left text-center">
        <h3 className="text-lg font-medium text-[#a1a1a1] uppercase">welcome to</h3>
        <h1 className="text-4xl font-semibold">Our Store</h1>
        <p className="text-[#a1a1a1] mt-4 md:w-[600px] w-auto">Mollit cupidatat minim sunt labore aliquip id deserunt est proident magna.Commodo esse ex in officia nostrud.Nulla qui exercitation sit incididunt tempor et labore.</p>
        <div className="md:flex md:justify-normal flex justify-center">
          <button className="bg-[#6152ED] rounded-lg h-[40px] w-[100px] mt-5 uppercase text-white  font-medium text-sm">Shop Now</button>
        </div>
      </div>
      <div>
        <div></div>
        <img src={hero} alt="hero-img" className="md:block hidden h-[500px] "/>
      </div>
    </div>
  )
}

export default Hero