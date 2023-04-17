import React, { useState, FormEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event?.preventDefault();

      await signIn({ username, password });
    },
    [password, signIn, username]
  );

  return (
    <Container>
      <form data-testid='login-form' onSubmit={handleSubmit}>
        <h2>login</h2>
        <input
          type='text'
          placeholder='Enter your email id'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>Enter</button>
      </form>
      <Link to='/signup'>Sign Up Instead</Link>
    </Container>
  );
};

export default SignIn;
