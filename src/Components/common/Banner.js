import React from 'react'

const Banner = () => {
  return (
    <div className="flex justify-center items-center -mb-12">
      <div className="bg-[#F7F8FB] md:flex md:flex-row md:justify-between items-center px-10 py-5 md:w-[700px] rounded-md flex flex-col justify-center w-[330px]">
        <h1 className="font-medium md:text-left text-center">Ready to get started?
        <br className="md:block hidden"/>
        {" "}Talk to us today.
        </h1>
        <button className="bg-[#6152ED] rounded-md h-[40px] w-[100px] mt-5 uppercase text-white  font-medium text-sm">Get Started</button>
      </div>
    </div>
  )
}

export default Banner