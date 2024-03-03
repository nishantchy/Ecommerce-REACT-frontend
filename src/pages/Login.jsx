import axios from 'axios';
import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const Login = () => {
  const [error, setError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();
  const {login} = useAuth();
  const handleChange = (e)=> {
    setLoginData({
      ...loginData, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e)=> {
    e.preventDefault();

    axios.post(`http://localhost:8000/api/login`, {
      email: loginData.email,
      password: loginData.password
    }).then((response)=>{
      login(response.data.user)
      navigate('/')
    })
    .catch(()=> {
      setError('Invalid email or Password')
    })
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label>Email address</label>
          <input type="text" className="form-control" name='email' value={loginData.email} onChange={handleChange} placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" name='password' value={loginData.password} onChange={handleChange} placeholder="password"/>
          {error && <span className='text-danger'>{error}</span>}
        </div>
        <div className="btn">
          <button type='submit' className='btn btn-primary'>Login</button>
        </div>
        </form>
        <p className='text-start'>Don't have an Account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
