import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = ({ signin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      signin(email, password);
    } catch (e) {
      console.log(e);
      alert('Failed to login');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div style={{ marginTop: 108 }}>
      <h1>로그인 컴포넌트</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
      <Link to="/signup">회원가입으로 이동</Link>
    </div>
  );
};

export default SignIn;
