import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../Utils'
import axios from 'axios'
function Signup() {
  const navigate = useNavigate();
  const [signupinfo, setSignupinfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSignupinfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password } = signupinfo;
    if (!name || !email || !password) {
      return handleError("All Fields are required")
    }
    try {
      const url = "http://localhost:3200/auth/signup";
      const response = await axios.post(url, {
        name,
        email,
        password
      })
      let {data} = response;
      console.log(response)
      if (data?.success) {
        handleSuccess("Signup successful")
        setTimeout(() => {
          navigate("/login")
        }, 1500)
      }


    } catch (error) {
      handleError(error.response?.data?.message || "Signup failed. Please try again.");
    }
  }

  return (
    <div className='container'>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={signupinfo.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={signupinfo.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signupinfo.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
        </div>

        <button type="submit">Signup</button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  )
}

export default Signup
