import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [inputErrorList, setInputErrorList] = useState({})
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    password_confirm: ''
  })
  const handleInput = (e) => {
    e.persist();
    setRegister({...register, [e.target.name]: e.target.value})
  }
  const saveUser = (e) => {
    e.preventDefault();

    const data = {
      name: register.name,
      email: register.email,
      password: register.password,
      password_confirm: register.password_confirm,
    }

    axios.post(`http://localhost:8000/api/register`, data)
    .then(res => {
      toast.success(res.data.message)
    })
    .catch(function (error){
      if(error.response.status === 422){
        setInputErrorList(error.response.data.errors)
      }
    })
  }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
     <div className="container">
     <form onSubmit={saveUser}>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" name="name" className="form-control" value={register.name} onChange={handleInput} placeholder="Full Name"/>
          {inputErrorList.name && <span className='text-danger'>{inputErrorList.name[0]}</span>}
        </div>
        <div className="mb-3">
          <label>Email Address</label>
          <input type="text" name="email" className="form-control" value={register.email} onChange={handleInput} placeholder="Email Address"/>
          {inputErrorList.email && <span className='text-danger'>{inputErrorList.email[0]}</span>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" value={register.password} onChange={handleInput} placeholder="Password"/>
          {inputErrorList.password && <span className='text-danger'>{inputErrorList.password[0]}</span>}
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="password" name="password_confirm" className="form-control" value={register.password_confirm} onChange={handleInput} placeholder="Confirm Password"/>
          {inputErrorList.password_confirm && <span className='text-danger'>{inputErrorList.password_confirm[0]}</span>}
        </div>
        <div className="btn">
          <button type='submit' className='btn btn-primary'>Register</button>
        </div>
      </form>
      <p className='text-start'>Already Have an Account? <Link to="/login">Login</Link></p>
     </div>
    </>
  )
}

export default SignUp
