import React from 'react';
import styled from 'styled-components';

import { Colors } from '../../styles/colors';

function Header() {
  return (
    <StyledHeader>
      <Logo>Currency</Logo>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${Colors.primary};
  padding: 40px 40px;
`;

const Logo = styled.h1`
  color: #fff;
  margin: 0;
  font-weight: 400;
`;

export default Header;
