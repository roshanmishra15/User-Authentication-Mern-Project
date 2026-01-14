import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { handleError, handleSuccess } from '../Utils';

function Login() {
  const navigate = useNavigate();

  const [logininfo, setLogininfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogininfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = logininfo;

    if (!email || !password) {
      return handleError('All fields are required');
    }

    try {
      const response = await axios.post(
        'http://localhost:3200/auth/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const { success, jwtToken, name, message } = response.data;

      if (success) {
        handleSuccess(message || 'Login successful');
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);

        setTimeout(() => {
          navigate('/home');
        }, 1500);
      }
    } catch (error) {
      handleError(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={logininfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={logininfo.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Login</button>

        <span>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Login;
