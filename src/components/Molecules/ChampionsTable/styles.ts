import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.5rem;
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
  align-items: ${({ isReverse }) => (isReverse ? 'flex-start' : 'flex-end')};
  flex: 1;
`;
