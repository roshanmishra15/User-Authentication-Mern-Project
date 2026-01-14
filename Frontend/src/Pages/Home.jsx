import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../Utils';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    setLoggedInUser(localStorage.getItem('loggedInUser'));
    fetchProducts();
  }, [navigate]);

  const handleLogout = () => {
    handleSuccess('User logged out successfully');
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3200/products',
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      );
      setProducts(response.data);
    } catch (err) {
      handleError(
        err.response?.data?.message || 'Failed to fetch products'
      );
    }
  };

  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2>Products</h2>
      {products.length === 0 && <p>No products found</p>}

      {products.map((product) => (
        <div key={product._id}>
          <p>{product.name} {product.Price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
