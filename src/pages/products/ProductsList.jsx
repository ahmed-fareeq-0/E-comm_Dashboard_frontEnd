import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './styleProductList.scss'

const ProductsList = () => {
	const [products, setProducts] = useState([])

	// run in everytime
	useEffect((e) => {
		getProduct()
	}, [])

	// get product from back-end
	const getProduct = async () => {
		let result = await fetch('http://localhost:5000/products');
		result = await result.json();
		setProducts(result);
		console.log(products)
	}

	const remove = async (id) => {
		let result = await fetch(`http://localhost:5000/product/${id}`, {
			method: 'Delete'
		})

		result = await result.json()
		if(result){
			getProduct()
			alert('done')
		}
	}
	
  return (
	<div className='product_list'>
		<h3>Product List</h3>
		<ul>
			<li>index</li>
			<li>title</li>
			<li>price</li>
			<li>category</li>
			<li>company</li>
			<li>setting</li>
		</ul>

		{products.map( (item, index) => (
		<ul key={item._id}>
		    <li>{index+1}</li>
			<li>{item.title}</li>
			<li>{item.price}</li>
			<li>{item.category}</li>
			<li>{item.company}</li>
			<li>
			<button onClick={() => remove(item._id)}>Remove</button>
			<Link to={'/update/'+item._id } >Update</Link>
			</li>
		</ul>
	  ))}

	</div>
  )
}

export default ProductsList
