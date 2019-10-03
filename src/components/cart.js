import React from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';

const cart=[];

const Cart = ({cartItems}) =>{
	if(!cartItems){
		return(<p>no items</p>)
	}
	return(
		cartItems.map(product => 
		<div className="col-md-4">
		<div className="thumbnail text-center">
		<p> <Button> {product.title} </Button> </p>
		</div>
		</div>
	)
	)
}

export{cart,Cart}