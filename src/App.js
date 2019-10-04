import React, { useEffect, useState } from 'react';
import {Products} from './components/products';
import {Cart} from './components/cart';
import './App.css';
import 'rbx/index.css'
import {Button, Container, Title} from 'rbx';

 const useSelection = () => {
  	const [selected, setSelected] = useState([]);
  	const addToCart = (x) => {
    	setSelected([x].concat(selected));
  };
  return [ selected, addToCart ];
};

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

   const handleAddToCart = function (e,product,productSize){
   	let InCart=false;
   	let cart=[];
   	cartItems.map(item=>{
   		if((item.product.sku===product.sku)&&(item.size===productSize)){
   			InCart = true;
   			item.count++;
	   	}
	   	cart.push(item);
   	});
   	if(!InCart){
   		cart.push({product,count:1,size:productSize});
   	}
   	setCartItems(cart);
   };

   const handleRemoveFromCart = function(e,product,productSize){
   	let InCart=true;
   	let cart=[];
   	cartItems.map(item=>{
   		if((item.product.sku===product.sku)&&(item.size===productSize)){
   			item.count--;
   		}
   		if(item.count>0){
			cart.push(item);
   		}
   	})
   	setCartItems(cart);
   }

  return (
    <Container>
      <Title> Shopping Cart Application</Title>
      <hr />
      <div className = "row">
      <div className = "col-md-8">
      <Products products = {products} handleAddToCart={handleAddToCart}/>
      </div>
      <div className="col-md-4">
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>
      </div>
      </div>
    </Container>
  );
};

export default App;
 