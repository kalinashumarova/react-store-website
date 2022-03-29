import React from 'react';
import Seo from './Seo';
import Options from './Options';
import Products from './Products';
import ProductType from './ProductType';
import useFetch from './useFetch';
import { useState } from 'react';
import './Home.css';

export default function Home() {
    const [ active, setActive ] = useState('');
    const [ isSearchActive, setSearchActive ] = useState(false);
    const [result, setResult] = useState([{}]);
    const [input, setInput] = useState("");

    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx';
    const [products, isLoading] = useFetch(url);

  return (
    <div className='home-wrapper'>
       <Seo input={input} setInput={setInput} result={result} setResult={setResult} products={products} 
             setSearchActive={setSearchActive} setActive={setActive} />

       <Options setInput={setInput} active={active} setActive={setActive} setSearchActive={setSearchActive}/>

       <Products result={result} products={products} active={active} setActive={setActive} 
                 isSearchActive={isSearchActive} setSearchActive={setSearchActive}/>
    </div>
  )
}
