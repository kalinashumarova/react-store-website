import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({ product }) {
    const { name, price, image_link } = product;
  return (
    <div className='single-product-wrapper'>
      <img src={image_link}></img>
      <h3>{name}</h3>
      <h4>Price: {price} $</h4>
      <button>Read more</button>
    </div>
  )
}
