import React, {useState} from 'react';
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
  return (
    <nav className="md:flex justify-between items-center bg-gray-300 h-auto flex px-10">

    {/* LOGO */}
        <div>
            <NavLink to="/"><img src={logo} alt="logo" className="h-[50px] w-[70px] cursor-pointer"/>
            </NavLink>
        </div>

        {/* LINKS */}
        <div className="md:w-[450px] md:block hidden">
            <ul className="flex justify-between items-center">
                <NavLink to="/" className="text-lg font-semibold uppercase cursor-pointer">Home</NavLink>
                <NavLink to="/about" className="text-lg font-semibold uppercase cursor-pointer">About</NavLink>
                <NavLink to="/products" className="text-lg font-semibold uppercase cursor-pointer">Product</NavLink>
                <NavLink to="/contact" className="text-lg font-semibold uppercase cursor-pointer">Contact</NavLink>
            </ul>
        </div>


        {/* LOGIN and CART */}
        <div className="md:flex  gap-3 items-center hidden">
 
            <button className="bg-[#513EB4] rounded-lg text-white h-[35px] w-[80px]">Log In</button>
            <div className="flex items-center relative">
                <div className="bg-[#F25621] h-[10px] w-[10px] rounded-full flex justify-center items-center absolute -top-1 -right-1">
                <div className="animate-ping rounded-full h-[10px] w-[10px] bg-[#F25621]  -top-2 -right-2"></div>
            </div>
                <NavLink to="/cart">
                    <FaShoppingCart className="relative text-xl"/>
                </NavLink>
            </div>
        </div>

        {/* RESPONSIVE */}
        <FaBars className="block md:hidden" onClick={() => setToggleMenu(!setToggleMenu)}/>
        {toggleMenu ? (
            <div>
                <div>
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </div>
            </div>) :''}
    </nav>
  )
}

export default Navbar