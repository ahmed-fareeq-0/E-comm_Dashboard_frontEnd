import React, {useState, useEffect} from 'react'
import './styleUpdateProduct.scss'
import {useParams} from 'react-router-dom'




const UpdateProduct = () => {

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [company, setCompany] = useState("");
	const params = useParams();

	useEffect(() => {
		getProductDetails();
	},[]);

	// get Product Details 
	const getProductDetails = async () => {
		let result = await fetch(`http://localhost:5000/product/${params.id}`);
		result = await result.json();

		console.log(result);
		setTitle(result.title);
		setPrice(result.price);
		setCategory(result.category);
		setCompany(result.company)
	}

	// handle Update Product
	const handleUpdateProduct = async (e) => {
		e.preventDefault();
		console.log(title,price,category,company);
		let result = await fetch(`http://localhost:5000/product/${params.id}`, {
			method: 'put',
			body: JSON.stringify({title: title, price:price, category:category, company:company}),
			headers:{
				'Content-Type': 'application/json'
			},

		})

		result = await result.json();
		console.log(result);
	}

  return (
	<div className='Container_update'>
	  <h1 className='title_update'>Update Product</h1>
		<div className='container_form'>
			<form onSubmit={handleUpdateProduct}>
				<input type='text' placeholder='title' required value={title} onChange={(e) => setTitle(e.target.value)} />
				<input type='text' placeholder='price' required value={price} onChange={(e) => setPrice(e.target.value)} />
				<input type='text' placeholder='category' required value={category} onChange={(e) => setCategory(e.target.value)} />
				<input type='text' placeholder='company' required value={company} onChange={(e) => setCompany(e.target.value)}/>
				<button>Update</button>
			</form>
		</div>
	</div>
  )
}

export default UpdateProduct 
