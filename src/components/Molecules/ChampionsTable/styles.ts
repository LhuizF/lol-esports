import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

interface Props {
  isReverse?: boolean;
}

export const Team = styled.div<Props>`
  display: grid;
  grid-row-gap: 10px;
`;

export const TeamName = styled.div`
  display: none;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;
