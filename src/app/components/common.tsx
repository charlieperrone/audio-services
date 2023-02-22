import styled from 'styled-components';

export const Container = styled.div`
  padding: 1em;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;

export const Column = styled.div<{ width?: string }>`
  display: grid;
  grid-column: span ${props => props.width || '1'};
`;

export const BorderedImage = styled.img`
  border: 5px solid ${props => props.theme.mainRed};
`;
