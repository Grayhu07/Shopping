import React, { useEffect, useState } from 'react';
import {Products} from './components/products';
import {cart,Cart} from './components/cart';
import './App.css';
import 'rbx/index.css'
import {Button, Container, Title} from 'rbx';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const [cartItem, setCart] = useState({});
  const cart=[];
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = function (cart,product){

  }

  return (
    <Container>
      <Title> Shopping Cart Application</Title>
      <hr />
      <div className = "row">
      <div className = "col-md-9">
      <Products products = {products} handleAddToCart={handleAddToCart}/>
      </div>
      <div className="col-md-3">
      <Cart cart={cart}/>
      </div>
      </div>
    </Container>
  );
};

export default App;