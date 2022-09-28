import React, {useState, useEffect} from 'react'

const ProductsList = () => {
	const [products, setProducts] = useState([])

	// run in everytime
	useEffect(() => {
		getProduct()
	}, [])

	// get product from back-end
	const getProduct = async () => {
		let result = await fetch('http://localhost:5000/products');
		result = await result.json();
		setProducts(result);
		console.log(products)
	}
	
  return (
	<div>
	  { products.map( (item) => (
		<ul key={item._id}>
			<li>{item.title}</li>
			<li>{item.price}</li>
			<li>{item.category}</li>
			<li>{item.company}</li>
		</ul>
	  ))}
	</div>
  )
}

export default ProductsList
