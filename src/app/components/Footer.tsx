import * as React from 'react';
import styled from 'styled-components';
import { Container, Header } from './common';
import instagram from '../../assets/icons/instagram.svg';

const StyledFooter = styled.footer`
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
  <StyledFooter>
    <ul>
      <li>Youtube</li>
    </ul>
  </StyledFooter>
);

export default Navigation;
