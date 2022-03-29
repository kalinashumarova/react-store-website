import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import ProductType from './ProductType';
import { act } from 'react-dom/test-utils';

export default function Options({ setInput, active, setActive, setSearchActive }) {

  if (active) {
    setSearchActive(false);
  }

  const handleClick = (e) => {
    setActive(e.target.innerText);
    setInput('');
  }

  return ( 
    <div className='options-wrapper'>
      <div>
      <h2>Categories</h2>
          <button onClick={handleClick}>All</button>
          <button onClick={handleClick}>Eyeliner</button>
          <button onClick={handleClick}>Mascara</button>
          <button onClick={handleClick}>Lipstick</button>
      </div>
    </div>
  )
}
