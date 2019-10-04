import React, {useState} from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';

const Products = ({products,handleAddToCart}) =>{
	const [productSize,setProductSize] = useState('S');

	const handleSizeChange = select_id => {
    	setProductSize(document.getElementById(select_id).value);
  };
	return(
	products.map(product => 
		<div className="col-md-4">
		<div className="thumbnail text-center">
		<img src={`data/products/${product.sku}_2.jpg`} alt={product.title} />
		<p> {product.title}</p>
		<select className="from-control" id={`${product.sku}`} onChange={()=>handleSizeChange(`${product.sku}`)}>
		  <option key='S' onClick = {()=> setProductSize('S')}>S</option>
          <option key='M' onClick = {()=> setProductSize('M')}>M</option>
          <option key='L' onClick = {()=> setProductSize('L')}>L</option>
          <option key='XL' onClick = {()=> setProductSize('XL')}>XL</option>
         </select>
		<b>{`$${product.price}`}</b>
		<p><Button onClick={(e)=> handleAddToCart(e,product,productSize)}> Add To Cart </Button></p>
		</div>
		</div>
	)
	)
}

export {Products}