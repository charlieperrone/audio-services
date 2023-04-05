import styled from 'styled-components';

// Containers
export const Container = styled.div`
  padding: 1em;
  width: 100%;
`;

export const ViewportContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

// Sections
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

// Grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

export const Column = styled.div<{ width?: string }>`
  display: grid;
  grid-column: span ${props => props.width || '1'};
`;

// Images
export const BorderedImage = styled.img`
  border: 5px solid ${props => props.theme.mainRed};
`;

// Typography
export const HeadlineH1 = styled.h1`
  margin: 0;
`;

export const HeadlineH2 = styled.h2`
  margin: 0;
`;

export const HeadlineH3 = styled.h3`
  margin: 0;
`;
