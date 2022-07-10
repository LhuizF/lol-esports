import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

interface Props {
  isReverse?: boolean;
}

export const Team = styled.div<Props>`
  display: grid;
  grid-row-gap: 10px;
`;
