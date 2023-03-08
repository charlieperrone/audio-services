import * as React from 'react';
import styled from 'styled-components';
import { Container, Header } from './common';
import youtube from '../../assets/icons/youtube-result.svg';

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
      <li>
        <img src={youtube} />
      </li>
    </ul>
  </StyledFooter>
);

export default Navigation;
