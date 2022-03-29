import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import Options from "./Options";
// import Products from "./Products";
import { FiSearch } from "react-icons/fi";

export default function Seo({ input, setInput, result, setResult, products, setSearchActive, setActive }) {
  // const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive('');

    if (input) {
      setResult(
        products.filter((product) =>
            product.name.toLowerCase().indexOf(input.toLocaleLowerCase()) !== -1)
      );

      console.log(Object.keys(result[0]));
      console.log(result);
    } else if (input === '') {
        setResult([{}]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search here..."
          value={input}
          className="search-bar"
          onChange={(e) => {setInput(e.target.value);
          !(e.target.value) ? setSearchActive(false) : setSearchActive(true)}}
        ></input>
        <FiSearch className="search-icon" />
        </div>
      </form>
    </div>
  );
}
