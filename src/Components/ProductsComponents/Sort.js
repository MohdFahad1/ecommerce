import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../../context/filter_context';

const Sort = () => {

  const { grid_view, setGridView, setListView } = useFilterContext();

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
        <div>total products</div>

      {/* DROPDOWN SORT A/C TO PRICE */}
        <div>
          dropdown
        </div>
      </div>
    </div>
  )
}

export default Sort