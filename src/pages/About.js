import React from 'react'
import Hero from '../Components/common/Hero'

const About = () => {
  const data = {
    name:"Ecommerce"
  }
  return (
    <div>
      <Hero myData={data}/>
    </div>
  )
}

export default About