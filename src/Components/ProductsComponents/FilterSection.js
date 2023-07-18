import React from 'react'
import { useFilterContext } from '../../context/filter_context';
import {FaCheck} from "react-icons/fa";
import FormatPrice from '../Helpers/FormatPrice';

const FilterSection = () => {
  const {filters: {text, color, price, minPrice, maxPrice}, all_products, updateFilterValue, clearFilters} = useFilterContext();

  // TO GET UNIQUE DATA
  const getUniqueData = (data, property) => {
    let newValue = data.map((currElem) => {
      return currElem[property];
    });

    if(property === "colors"){
      return (newValue = ["all", ...new Set([].concat(...newValue))]);
    }
    else{
      return (newValue = ["all", ...new Set(newValue)]);
    }
      
  };

  // NEED UNQIUE DTA
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");

  // console.log(price);
  // console.log(maxPrice);
  // console.log(minPrice);

  // console.log(colorsData);
  return (
    <div className="my-10">

    {/* FILTER BY SEARCH */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="text" placeholder="Search for products" value={text} onChange={updateFilterValue} className="h-[50px] w-[400px] border-2 border-black px-3"/>
      </form>

      {/* FILTER BY CATEGORY */}
      <div>
        <h3 className="uppercase text-xl font-medium">Category</h3>
        <div className="flex flex-col items-start">{categoryOnlyData.map((currElem, index) => {
          return (
            <button key={index} type="button" name="category" value={currElem} onClick={updateFilterValue} className="capitalize">
              {currElem}
            </button>
          )
        })}</div>
      </div>

        {/* FILTER BY COMPANY */}
      <div className="text-xl font-medium mt-3 uppercase">
        <h3>Compnay</h3>
        <form action="#">
          <select name="company" id="company" onClick={updateFilterValue}>
            {companyOnlyData.map((currElem, index) => {
              return (
                <option key={index} value={currElem} name="company" className="capitalize">{currElem}</option>
              )
            })}
          </select>
        </form>
      </div>


      {/* FILTER BY COLOR */}
      <div>
        <h3 className="text-xl font-medium mt-3 uppercase">Colors</h3>
        <div>
        {colorsOnlyData.map((currCol, index) => {
          
        if(currCol === "all"){
          return (
            <button key={index} name="color" type="button" onClick={updateFilterValue} className="capitalize text-2xl m-2">all</button>
          )
        }

          return (
            <button key={index} value={currCol} name="color" type="button" className="h-[30px] w-[30px] rounded-full ml-3" style={{backgroundColor: currCol}} onClick={updateFilterValue}>{color === currCol ? <FaCheck className="text-white text-center ml-[7px]"/> : null}</button>
          )
        })}
        </div>
      </div>


      {/* FILTER BY PRICE */}
      <div>
        <h3 className="text-xl font-medium mt-3 uppercase">Price</h3>
        <p>
        <FormatPrice price={price}/>
        </p>
        <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue}/>
      </div>

      {/* CLEAR ALL FILTERS */}
      <div>
        <button className="uppercase border-2 border-black" onClick={clearFilters}>Clear filters</button>
      </div>

    </div>
  )
}

export default FilterSection