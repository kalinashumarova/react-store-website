import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [products, setProducts] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);


    const renderProducts = async () => {
        const result = await fetch(url);
        const res = await result.json();
        setProducts(res);
        setIsLoading(false)
    }
    
    useEffect(() => {
        setIsLoading(true);
        renderProducts();
    }, []);

    return [products, isLoading];
}

export default useFetch;
