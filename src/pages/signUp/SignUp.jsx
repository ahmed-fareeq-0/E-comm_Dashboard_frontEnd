import { useState } from 'react';
import './styleSignup.scss';




const SignUp = () => {

	const [name, setName] = useState()
	const [email,setEmail] = useState()
	const [pass, setPass] = useState()


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name);
		console.log(email);
		console.log(pass);
	}

  return (
	<div className='Container_signup'>
	  <h1 className='title_Signup'>Register</h1>

	 	<div className='container_form'>
		 <form onSubmit={handleSubmit}>
            <input type='text'  required placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' required placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='text'  required placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} />
            <button>send</button>
    	</form>
		</div>
	</div>
  )
}

export default SignUp
