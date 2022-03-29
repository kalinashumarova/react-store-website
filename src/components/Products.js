import React from 'react';
import { useState, useEffect } from 'react';
import Options from './Options';
import useFetch from './useFetch';
import Seo from './Seo';
import Product from './Product';
import ProductType from './ProductType';


export default function Products({ isLoading, result, products, active, setActive, isSearchActive }) {

  return (
    <div className='products-wrapper'>
      {/* render all products when no type is selected (or 'All' is selected) and nothing is searched  */}
      {(active == 'All' || !active) && !isSearchActive &&  products.map((product = Object.keys(product)) => {
        return <Product product={product} key={product.id} />;
      })}

       {/* render products selected by type  */}
       {active === 'Eyeliner' && <ProductType productType='eyeliner' />}
       {active === 'Mascara' && <ProductType productType='mascara' />}
       {active === 'Lipstick' && <ProductType productType='lipstick' />}

       {/* render searched products  */}
       {isSearchActive ? (result.map((product = Object.keys(product)) => {
        return <Product product={product} key={product.id} />;
      })) : ''}
    </div>
  )
}
