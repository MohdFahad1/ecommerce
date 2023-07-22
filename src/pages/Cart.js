import React from 'react'
import { useCartContext } from '../context/cart_context';
import CartItem from '../Components/CartComponents/CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Components/Helpers/FormatPrice';

const Cart = () => {
  const {cart, clearCart, total_price, shipping_fee} = useCartContext();

  if(cart.length === 0){
    return (
        <div className="flex flex-col justify-center items-center">
          <h1>No Item in the Cart</h1>
          <NavLink to="/products"><button className="bg-purple-500 text-white capitalize h-[50px] w-[150px]">continue shopping</button></NavLink>
        </div>)
  }

  return (
    <div>
      <div className="flex justify-between">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />

      <div className="my-5">
        {cart.map((currElem) => {
           return <CartItem key={currElem.id} {...currElem}/>;
        })}
      </div>

      <hr />

      <div className="flex justify-around mt-5">
        <NavLink to="/products"><button className="bg-purple-500 text-white capitalize h-[50px] w-[150px]">continue shopping</button></NavLink>
        <button className="bg-red-500 text-white capitalize h-[50px] w-[150px]" onClick={clearCart}>clear cart</button>
      </div>

<div className="flex justify-end mr-24">
        <div className="bg-gray-300 w-[200px] p-3 mt-24">
           <div className="flex justify-between">
            <p>Sub Total:</p>
            <p className="font-bold"><FormatPrice price={total_price}/></p>
           </div>

           <div className="flex justify-between">
            <p>Shipping Fee:</p>
            <p className="font-bold"><FormatPrice price={shipping_fee}/></p>
           </div>
<hr className="my-2"/>
           <div className="flex justify-between">
            <p>Order Total:</p>
            <p className="font-bold"><FormatPrice price={shipping_fee + total_price}/></p>
           </div>
        </div>
</div>
    </div>
  )
}

export default Cart