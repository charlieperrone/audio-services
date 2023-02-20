import * as React from 'react';
import styled from 'styled-components';
import { Container } from './common';

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.mainRed};
  color: white;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <StyledContainer>
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
      </StyledContainer>
    </HeaderWrapper>
  </header>
);

export default Navigation;
