import React from 'react';

const Products = ({products}) =>{

	return(
	products.map(product => <a>
		<img src='data/products/${product.sku}_2.jpg' alt={product.title}/>
		{product.title}
		</a>
	)
	)
}
export {Products}