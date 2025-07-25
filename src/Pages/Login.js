import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    
  };

  return (
    <LoginSection>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Login</h1>
        <StyledInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <StyledInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginSection>
  );
};

const LoginSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const StyledInput = styled.input`
  margin: 0.5rem 0;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  margin: 1rem 0;
  padding: 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  background: green;
  border: none;
  border-radius: 4px;
  color: white;

  &:hover {
    background: darkgreen;
  }
`;

export default Login;
