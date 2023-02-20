import * as React from 'react';
import styled from 'styled-components';
import { Container, Header } from './common';

const HeaderWrapper = styled(Header)`
  background-color: ${props => props.theme.mainRed};
  color: white;
`;

const StyledNavigation = styled.nav`
  ol {
    display: flex;

    li {
      padding-right: 5px;
    }
  }
`;

const Navigation: React.FC = () => (
  <header>
    <HeaderWrapper>
      <h1>CP Audio Services</h1>
      <StyledNavigation>
        <ol>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ol>
      </StyledNavigation>
    </HeaderWrapper>
  </header>
);

export default Navigation;
