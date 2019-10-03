import React from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';
import {cart} from './cart';

const Products = ({products,handleAddToCart}) =>{
	return(
	products.map(product => 
		<div className="col-md-4">
		<div className="thumbnail text-center">

		<p> {product.title}</p>
		<b>{`$${product.price}`}</b>
		<p><Button onClick={handleAddToCart(cart,product)}> Add To Cart </Button></p>
		</div>
		</div>
	)
	)
}

export {Products}