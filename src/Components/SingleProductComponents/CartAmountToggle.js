import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center gap-3">
        <p onClick={() => setDecrease()} className="cursor-pointer"><FaMinus /></p>
        <p className="text-2xl font-medium">{amount}</p>
        <p onClick={() => setIncrease()} className="cursor-pointer"><FaPlus /></p>
    </div>
  )
}

export default CartAmountToggle