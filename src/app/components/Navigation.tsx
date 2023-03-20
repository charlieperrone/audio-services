import * as React from 'react';
import styled from 'styled-components';
import { Container, Header, HeadlineH1 } from './common';

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
`;

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
  <StyledHeader>
    <HeaderWrapper>
      <HeadlineH1>CP Audio Services</HeadlineH1>
      <StyledNavigation>
        <ol>
          <li>
            <a href="#consulting">Studio Consolutations</a>
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
  </StyledHeader>
);

export default Navigation;
