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
      padding-right: 1em;

      * {
        font-family: ${props => props.theme.secondaryFont};
        margin: 0;
      }
    }
  }
`;

const NavLink: React.FC<{ href: string; children: any }> = ({
  href,
  children,
}) => (
  <li>
    <h3>
      <a href={href}>{children}</a>
    </h3>
  </li>
);

const Navigation: React.FC = () => (
  <StyledHeader>
    <HeaderWrapper>
      <HeadlineH1>Audio Services</HeadlineH1>
      <StyledNavigation>
        <ol>
          <NavLink href="#consulting">Consultations</NavLink>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">About</NavLink>
        </ol>
      </StyledNavigation>
    </HeaderWrapper>
  </StyledHeader>
);

export default Navigation;
