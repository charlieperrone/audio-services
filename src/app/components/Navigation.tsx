import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.mainRed};
`;

const Navigation: React.FC = () => (
  <HeaderWrapper>
    <h1>CP Audio Services</h1>
  </HeaderWrapper>
);

export default Navigation;
