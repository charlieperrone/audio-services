import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.mainRed};
`;

const Navigation: React.FC = () => (
  <header>
    <HeaderWrapper>
      <h1>CP Audio Services</h1>
    </HeaderWrapper>
  </header>
);

export default Navigation;
