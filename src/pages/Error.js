import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center"><span className="text-red-500">404</span> - Page Not Found</h1>
        <p className="text-[#a1a1a1] text-xl font-medium text-center md:w-[400px] my-10 w-[350px]">
          We're sorry, but the page you are looking for does not exist or may have been moved. It's possible that you entered an incorrect URL or followed a broken link.</p>
        <div className="md:flex md:justify-normal flex justify-center">
          <NavLink to="/"><button className="text-lg font-medium bg-[#6152ED] rounded-md h-[55px] w-[150px] mt-5 text-white cursor-pointer hover:bg-[#31269a] duration-300">Go Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Error