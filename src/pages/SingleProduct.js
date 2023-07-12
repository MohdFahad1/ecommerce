import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from '../context/productContext';
import MyImage from '../Components/SingleProductComponents/MyImage';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import FormatPrice from '../Components/Helpers/FormatPrice';
import Star from '../Components/SingleProductComponents/Star';
import AddToCart from '../Components/SingleProductComponents/AddToCart';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();

  const { id } = useParams();

  const { id: alias, name, company, price, description, category, stock, stars, reviews, image } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  if(isSingleLoading) {
    return (<div>Loading......</div>);
  }
  
  return (
    <div>
      <div className="bg-[#F7F8FB] px-10 py-4 text-xl font-medium capitalize">
        <NavLink to="/" className="text-[#3A5B75]">Home</NavLink>/ {name}
      </div>

      <div className="flex justify-center items-center">
        <div className="md:flex md:flex-row items-center justify-center gap-10 my-10 bg-[#F7F8FB] md:w-[1200px] md:p-3 flex flex-col w-[400px] p-4">

      {/* PRODUCT IMAGES */}
          <div>
            <MyImage imgs={image}/>
          </div>

      {/* PRODUCT DATA */}
          <div>
            <p className="text-3xl font-medium capitalize">{name}</p>

            {/* RATINGS */}
            <Star stars={stars} reviews={reviews}/>


            {/* PRICE */}
            <p className="flex gap-1">
              MRP: 
              <del><FormatPrice price={ price + 250000 }/></del>
            </p>
            <p className="text-[#7B75C0] mb-3">Deal of the Day: <FormatPrice price={price}/>
            </p>


            {/* DESCRIPTION */}
            <p className="text-[#797878] md:w-[500px] w-[350px]">{description}</p>

             {/* ICONS  */}
            <div className="flex justify-between my-3">
              <div className="flex flex-col justify-center items-center">
              <div className="bg-[#F7F8FB] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                <TbTruckDelivery className="text-xl"/>
              </div>
                <p>Free Delivery</p>
              </div>
              <div className="flex flex-col justify-center items-center">
              <div className="bg-[#F7F8FB] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                <TbReplace className="text-xl"/>
              </div>
                <p>30 Days Replacement</p>
              </div>
              <div className="flex flex-col justify-center items-center">
              <div className="bg-[#F7F8FB] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                <TbTruckDelivery className="text-xl"/>
              </div>
                <p>Store Delivery</p>
              </div>
              <div className="flex flex-col justify-center items-center">
              <div className="bg-[#F7F8FB] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                <MdSecurity className="text-xl"/>
              </div>
                <p>2 Year Warranty</p>
              </div>
            </div>


            {/* IN STOCK & BRAND */}
            <div>
              <p>Available: <span className={`stock ${stock > 0 ? "text-green-600" : "text-red-600"} font-medium`}>{stock > 0 ? "In Stock": "Not Available"}</span></p>
              <p>
                Brand: <span className="font-medium my-3 capitalize">{company}</span>
              </p>
            </div>

            <div className="h-[3px] max-w-[100%] w-[90%] bg-[#ccc] my-3"></div>

            {
              stock > 0 && <AddToCart product={singleProduct}/>
            }

          </div>


        </div>
      </div>

    </div>
  )
}

export default SingleProduct