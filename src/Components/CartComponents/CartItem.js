import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from '../SingleProductComponents/CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';

const CartItem = ({id, name, image, color, price, amount}) => {

    const { removeItem, setDecrease, setIncrease }= useCartContext();

  return (
    <div className="flex justify-between items-center my-10 px-10">

        {/* ITEM */}
        <div  className="flex items-center gap-2">
            <img src={image} alt={name} className="h-[50px] w-[80px]"/>
            <div>
            <p>{name}</p>
            <div className="flex items-center gap-2">
                <p>color: </p>
                <div style={{backgroundColor: color, color: color}} className="h-[30px] w-[30px] rounded-full"></div>
            </div>
        </div>
        </div>

        {/* PRICE */}
        <div>
            <FormatPrice price={price} />
        </div>

        {/* AMOUNT */}
        <div>
            {amount}
        </div>

        {/* QUANTITY */}
        <div>
        <CartAmountToggle amount={amount} setIncrease={() => setIncrease(id)} setDecrease={() => setDecrease(id)}/>
        </div>

        {/* SUBTOTAL */}
        <div>
            <FormatPrice price={price*amount}/>
        </div>

        {/* REMOVE */}
        <div>
            <FaTrash className="cursor-pointer" onClick={() => removeItem(id)}/>
        </div>

    </div>
  )
}

export default CartItem