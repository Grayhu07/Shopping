import React, {useState} from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';

const Products = ({products,handleAddToCart}) =>{
	const [productSize,setProductSize] = useState('');

	return(
	products.map(product => 
		<div className="col-md-4">
		<div className="thumbnail text-center">
		<img src={`data/products/${product.sku}_2.jpg`} alt={product.title} />
		<p> {product.title}</p>
		  <Button key='S' onClick = {()=> setProductSize('S')} disabled={product.S === 0}>S</Button>
          <Button key='M' onClick = {()=> setProductSize('M')} disabled={product.M === 0}>M</Button>
          <Button key='L' onClick = {()=> setProductSize('L')} disabled={product.L === 0}>L</Button>
          <Button key='XL' onClick = {()=> setProductSize('XL')} disabled={product.XL === 0}>XL</Button>
		<b>{`$${product.price}`}</b>
		<p><Button onClick={(e)=> handleAddToCart(e,product,productSize)}> Add To Cart </Button></p>
		</div>
		</div>
	)
	)
}

export {Products}