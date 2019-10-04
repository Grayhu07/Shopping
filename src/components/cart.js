import React from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';

const Cart = ({cartItems,handleRemoveFromCart}) =>{

	const calculator = ({cartItems})=>{
		let total =0;
		cartItems.map(item=>{
			total += (item.product.price * item.count);
		})
		return total.toFixed(2);
	}

	return(
		<Container>
		{!cartItems.length ? "no item" : <div> you have {cartItems.length} products </div>}
		<p>{cartItems.length ? cartItems.map(item=><p>{item.product.title} size {item.size} x {item.count}  <Button className="btn btn-danger"
		onClick={(e)=> handleRemoveFromCart(e,item.product,item.size)}>
		 X </Button></p>) : ""}</p>
		<div> total is : $ {calculator({cartItems})}</div>
		<p><button>check out</button></p>
		</Container>
	)
}

export{Cart}