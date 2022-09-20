import { useState, useEffect } from 'react';
import './styleSignup.scss';
import {useNavigate} from 'react-router-dom';



const SignUp = () => {

	const [name, setName] = useState('')
	const [email,setEmail] = useState('')
	const [password, setPass] = useState('')
	const navigate = useNavigate()

	// navbar chacke
	useEffect(() => {
		const auth = localStorage.getItem('user')
		if(auth){
			navigate('/')
		}
	})


	const handleSubmit = async (e) => {
		e.preventDefault();
		// send the value to back end
		let result = await fetch('http://localhost:5000/register', {
			method: 'post',
			body: JSON.stringify({name,email,password}),
			headers:{
				'Content-Type': 'application/json'
			},
		})

		result = await result.json()
		localStorage.setItem('user', JSON.stringify(result))
		navigate('/')
	}

  return (
	<div className='Container_signup'>
	  	<h1 className='title_Signup'>Register</h1>
		
	 	<div className='container_form'>
			 <form onSubmit={handleSubmit}>
				<input type='text'  required placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
				<input type='email' required placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
				<input type='text'  required placeholder='Enter Password' value={password} onChange={(e) => setPass(e.target.value)} />
				<button>send</button>
    		</form>
		</div>
	</div>
  )
}

export default SignUp
