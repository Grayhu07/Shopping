import React, { useEffect, useState } from 'react';
import {Products} from './components/products';
import './App.css';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      <Products products = {products}/>
    </ul>
  );
};

export default App;