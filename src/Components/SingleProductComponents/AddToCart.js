import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';

const AddToCart = ({ product }) => {
  const {addToCart} = useCartContext();

  const {id, colors, stock} = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount( amount - 1) : setAmount(1);
  }

  const setIncrease = () => {
    amount < stock ? setAmount( amount + 1)  : setAmount(stock);
  }

  return (
    <div>


    {/* COLOR BUTTONS */}
      <p className="flex justify-between w-[90%]">Colors:{" "}
        {colors.map((currCol, index) => {
          return (
            <button className="h-[30px] w-[30px] rounded-full flex justify-center items-center" style={{backgroundColor: currCol}} onClick={() => setColor(currCol)} key={index}>{color === currCol ? <FaCheck className="text-white"/>: null}</button>
          )
        })}
      </p>

      {/* Add To CART BUTTON */}
      <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />

      <div className="mt-4">
      <NavLink to="/cart" onClick={() => addToCart(id, amount, color, product)}>
        <button className="bg-[#6152ED] rounded-md uppercase text-white  font-medium text-sm p-3">Add To Cart</button>
      </NavLink>
      </div>
    </div>
  )
}

export default AddToCart