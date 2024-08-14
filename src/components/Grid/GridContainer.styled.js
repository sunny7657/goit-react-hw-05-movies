import styled from '@emotion/styled';

export const GridContainer = styled.ul`
  display: grid;
  gap: 16px;
  margin-top: 20px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
