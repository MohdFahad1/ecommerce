import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const ListView = ({ products }) => {

  return (
    <div>
        <div className="bg-[#F7F8FB] p-3 m-3 flex flex-col gap-5 items-center">
        {products.map((currElem) => {
          return (
              <div className="bg-black p-3 text-white flex gap-10 w-[600px]" key={currElem.id}>

              {/* IMAGE */}
                <div className="relative w-[650px] h-[200px] overflow-hidden">
                  <img
                    src={currElem.image}
                    alt={currElem.name}
                    className="w-full h-full transition-transform duration-300 hover:scale-125 hover:opacity-50"
                  />
                </div>

                {/* DESCRIOPTION */}
                <div className="text-lg font-medium mt-3">
                  <p className="capitalize">{currElem.name}</p>
                  <p><FormatPrice price={currElem.price} /></p>
                  <p className="text-base">{currElem.description.slice(0, 99)}...</p>
                  <NavLink to={`/singleproduct/${currElem.id}`}>
                        <button  className="bg-[#6152ED] h-[40px] w-[100px] mt-5 uppercase text-white  font-medium text-sm">read more</button>
                    </NavLink>
                </div>

              </div>
          );
        })}
        </div>
    </div>
  )
}

export default ListView