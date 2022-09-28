import React, {useState} from 'react'
import './styleAddProduct.scss'


const AddProduct = () => {

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [company, setCompany] = useState("");
	// const [error,setError] = useState(true)

	const handleAddProduct = async (e) => {
		e.preventDefault();
		
		// required
		// if(!title || !price || !category || !company){
		// 	setError(true)
		// 	return false
		// }
		const userId = JSON.parse(localStorage.getItem('user'))._id;
		
		let result = await fetch('http://localhost:5000/add-product', {
			method: 'post',
			body: JSON.stringify({title: title, price: price, category: category, company:company, userId: userId}),
			headers:{
				'Content-Type': 'application/json'
			},
		})

		result = await result.json()
		console.warn(result);

		
	}

  return (
	<div className='Container_AddProduct'>
	  <h1 className='title_AddProduct'>add product to the home</h1>
		<div className='container_form'>
			<form onSubmit={handleAddProduct}>
				<input type='text' placeholder='title' value={title} required  onChange={(e) => setTitle(e.target.value)} />
				{/* {error && !title && <span>enter pr</span>} */}
				<input type='text' placeholder='price' value={price} required onChange={(e) => setPrice(e.target.value)} />
				<input type='text' placeholder='category' value={category} required onChange={(e) => setCategory(e.target.value)} />
				<input type='text' placeholder='company' value={company} required onChange={(e) => setCompany(e.target.value)} />
				<button>Add</button>
			</form>
		</div>
	</div>
  )
}

export default AddProduct
