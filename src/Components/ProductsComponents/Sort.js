import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../../context/filter_context';

const Sort = () => {

  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

  return (
    <div className="my-10 w-[870px]">
      <div className="flex justify-between items-center">

      {/* LIST & GRID BUTTONS */}
        <div className="flex items-center gap-2">
          <button className={grid_view ? "bg-black text-white h-[30px] w-[30px] flex justify-center items-center rounded-full" : "flex justify-center items-center border-2 border-black rounded-full h-[30px] w-[30px]"} onClick={setGridView}><BsFillGridFill /></button>
          <button
          className={!grid_view ? "bg-black text-white h-[30px] w-[30px] flex justify-center items-center rounded-full" : "flex justify-center items-center border-2 border-black rounded-full h-[30px] w-[30px]"} onClick={setListView}><BsList /></button>
        </div>

      {/* TOTAL PRODUCTS NUMBER SHOWN */}
        <div>{`${filter_products.length} Products Available`}</div>

      {/* DROPDOWN SORT A/C TO PRICE */}
        <div>
          <form action='#'>
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">Price(Lowest)</option>

              <option value="#" disabled></option>

              <option value="highest">Price(highest)</option>

              <option value="#" disabled></option>

              <option value="a-z">(a-z)</option>

              <option value="#" disabled></option>

              <option value="z-a">(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sort