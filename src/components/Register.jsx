// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1/users/';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(API_URL, {
        username,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      // Boshqa ma'lumotlarni omborga saqlash (masalan, foydalanuvchi ma'lumotlari)
      console.log(response.data);
    } catch (error) {
      setError('Username or password is incorrect');
      console.error('Registration error: ', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
