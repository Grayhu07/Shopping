import React from 'react';

const Filter = ({products, sort}) => {

	const handleChangeSort=select_id=>{
		{products.sort((a,b)=>a.price<b.price ? (1,-1) : (-1,1))}
	}
	return(
		<label>
		Order by
		<select className="form-control" id={`${products.sku}`} >
		onChange={()=>handleChangeSort(`${products.sku}`)}>
		<option>Select</option>
		<option>lowest to highest</option>
		<option>highest to lowest</option>
		</select>
		</label>
	)
}

export {Filter};