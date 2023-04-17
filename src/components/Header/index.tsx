import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, HeaderContent, Profile } from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <div>
          <Profile>
            <span>Welcome!</span>
            <strong>{user.username}</strong>
          </Profile>
        </div>

        <button type='button' onClick={signOut}>
          <FiLogOut /> Logout
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
