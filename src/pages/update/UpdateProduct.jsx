import React, {useState} from 'react'
import './styleUpdateProduct.scss'

const UpdateProduct = () => {

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [company, setCompany] = useState("");

	const handleUpdateProduct = (e) => {
		e.preventDefault();
		console.log(title,price,category,company);
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
