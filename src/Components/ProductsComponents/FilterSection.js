import React from 'react'
import { useFilterContext } from '../../context/filter_context'

const FilterSection = () => {
  const {filters: {text}, updateFilterValue} = useFilterContext();


  return (
    <div className="my-10">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="text" placeholder="Search for products" value={text} onChange={updateFilterValue} className="h-[50px] w-[400px] border-2 border-black px-3"/>
      </form>
    </div>
  )
}

export default FilterSection