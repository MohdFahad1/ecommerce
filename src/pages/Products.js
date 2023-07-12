import React from 'react';
import FilterSection from '../Components/ProductsComponents/FilterSection';
import Sort from '../Components/ProductsComponents/Sort';
import ProductList from '../Components/ProductsComponents/ProductList';

const Products = () => {

  return (
    <div className="my-10">
      <div className="flex items-center justify-around">

        {/* LEFT ALL FILTER SECTION */}
        <div>
          <FilterSection />
        </div>

        {/* RIGHT DIV WITH SORT & PRODUCTS */}
        <div>

        {/* SORT */}
        <div>
          <Sort />
        </div>

        {/* ALL PRODUCTS */}
        <div>
          <ProductList />
        </div>

        </div>
      </div>
    </div>
  )
}

export default Products