import React from 'react';
import { useProductContext } from '../../context/productContext';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const BestProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  console.log(featureProducts);

  if (isLoading) {
    return <div>Loading..........</div>;
  }

  if (!featureProducts || featureProducts.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="bg-[#F7F8FB] py-5 flex flex-col items-center">
      <div className="text-center mb-10">
        <h3 className="text-[#a1a1a1] uppercase text-2xl font-medium">Check now</h3>
        <h1 className="text-4xl font-semibold">Best Selling Products</h1>
      </div>

      {/* PRODUCTS LISTS */}
      <div className="bg-[#F7F8FB] flex lg:flex-row md:justify-around md:gap-20 py-5 flex-col w-[280px] gap-10 items-center justify-center">
        {featureProducts.map((currElem) => {
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
  );
};

export default BestProducts;
