import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice';

const GridView = ({ products }) => {
  return (
    <div>
        <div className="bg-[#F7F8FB] grid grid-cols-3 gap-5">
        {products.map((currElem) => {
          return (
            <NavLink to={`/singleproduct/${currElem.id}`} key={currElem.id}>
              <div className="bg-black p-3 text-white">
                <div className="relative w-[250px] h-[200px] overflow-hidden">
                  <img
                    src={currElem.image}
                    alt={currElem.name}
                    className="w-full h-full transition-transform duration-300 hover:scale-125 hover:opacity-50"
                  />
                </div>
                <div className="flex justify-between text-lg font-medium mt-3">
                  <p className="capitalize">{currElem.name}</p>
                  <p><FormatPrice price={currElem.price} /></p>
                </div>
              </div>
            </NavLink>
          );
        })}
        </div>
    </div>
  )
}

export default GridView