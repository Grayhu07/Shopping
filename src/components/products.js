import React, {useState} from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';

const Products = ({products,handleAddToCart}) =>{
	const [productSize,setProductSize] = useState('');

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
		  <option> Select a Size </option>
		  <option key='S' onClick = {()=> setProductSize('S')} disabled={product.S === 0}>S</option>
          <option key='M' onClick = {()=> setProductSize('M')} disabled={product.M === 0}>M</option>
          <option key='L' onClick = {()=> setProductSize('L')} disabled={product.L === 0}>L</option>
          <option key='XL' onClick = {()=> setProductSize('XL')} disabled={product.XL === 0}>XL</option>
         </select>
		<b>{`$${product.price}`}</b>
		<p><Button onClick={(e)=> handleAddToCart(e,product,productSize)}> Add To Cart </Button></p>
		</div>
		</div>
	)
	)
}

export {Products}