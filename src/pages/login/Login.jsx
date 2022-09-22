import React from 'react'
import './styleLogin.scss'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
		let result = await fetch('http://localhost:5000/login', {
			method: 'post',
			body: JSON.stringify({email, password}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		result = await result.json()
		if(result.name){
			localStorage.setItem('user', JSON.stringify(result));
			navigate('/')
		}else{
			alert('no found')
		}
	}



  return (
	<div className='Container_login'>
	<h1 className='title_login'>Login</h1>
  
   <div className='container_form_login'>
	   <form onSubmit={handleSubmit}>
		  <input type='email' required placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
		  <input type='text'  required placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
		  <button>send</button>
	  </form>
  </div>
</div>
  )
}

export default Login
