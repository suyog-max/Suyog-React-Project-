import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`submitted: ${email}`);
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className='email'>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default Login;
