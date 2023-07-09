import React from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import Banner from './Banner';

const Footer = () => {
  return (
    <>
    <Banner />
    <div className="text-white bg-[#061028] md:flex md:flex-row md:justify-around md:items-start md:gap-5 md:px-20 md:py-14 md:pt-20 flex flex-col items-center py-7 pt-20">

        {/* ABOUT */}
        <div className="md:text-left text-center">
            <h1 className="text-2xl font-semibold">Our Ecommerce</h1>
            <p className="w-[250px] mt-3">Commodo tempor Lorem laboris nisi non ad pariatur laborum.</p>
        </div>

        {/* NEWSLETTER */}
        <div className="md:mt-0 mt-10">
            <p className="text-xl font-semibold">Subscribe to get important updates</p>
            <div className="md:flex md:flex-col md:justify-normal md:items-start flex flex-col justify-center items-center">
                <input type="email" placeholder='Your E-Mail' className="text-black h-[35px] w-[250px] px-5 mt-3 outline-none rounded-md"/>
                <div className="md:flex md:justify-normal flex justify-center">
                    <button className="bg-[#6152ED] rounded-md h-[35px] w-[100px] mt-5">Subscribe</button>
                </div>
            </div>
        </div>

        {/* SOCIALS */}
        <div className="md:mt-0 mt-10">
            <h1 className="text-xl font-semibold md:text-left text-center">Follow Us</h1>
            <div className="flex gap-4 mt-3">
                <div className="flex justify-center items-center border-2 border-white rounded-full h-[35px] w-[35px] hover:text-[#061028] hover:bg-white duration-300 cursor-pointer">
                    <FaDiscord className="rounded-full cursor-pointer text-xl"/>
                </div>
                <div className="flex justify-center items-center border-2 border-white rounded-full h-[35px] w-[35px] hover:text-[#061028] hover:bg-white duration-300 cursor-pointer">
                    <FaInstagram className="rounded-full cursor-pointer text-xl"/>
                </div>
                <div className="flex justify-center items-center border-2 border-white rounded-full h-[35px] w-[35px] hover:text-[#061028] hover:bg-white duration-300 cursor-pointer">
                    <FaTwitter className="rounded-full cursor-pointer text-xl"/>
                </div>
            </div>
        </div>

        {/* NUMBER */}
        <div className="md:mt-0 mt-10">
            <h1 className="text-xl font-semibold md:text-left text-center">Call Us</h1>
            <p className="text-lg mt-3">+91 123 456 789</p>
        </div>
    </div>
    </>
  )
}

export default Footer