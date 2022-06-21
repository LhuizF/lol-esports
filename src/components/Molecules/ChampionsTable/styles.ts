import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
  display: flex;
`;

interface Props {
  isReverse?: boolean;
}

export const Team = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: pink;
  align-items: ${({ isReverse }) => (isReverse ? 'flex-start' : 'flex-end')};
  flex: 1;
`;

export const ChampionsContainer = styled.div`
  display: flex;
  background-color: red;
`;
