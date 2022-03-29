import React, { useState } from 'react';
import useFetch from './useFetch';

export default function ProductType({ productType }) {
    const productTypeUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=${productType}`;
    const [ products, isLoading ] = useFetch(productTypeUrl);

  return (
    <div className='products-wrapper'>
      {isLoading ? 
       (<div>Loading...</div>) : 
      (products.map((product) => (
        <div key={product.id} className='single-product-wrapper'>
            <img src={product.image_link}></img>
            <h3>{product.name}</h3>
            <h4>Price: {product.price} $</h4>
            <button>Read more</button>
        </div>
     )))}
      
    </div>
  )
}
