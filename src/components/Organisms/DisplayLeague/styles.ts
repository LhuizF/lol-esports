import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  padding: 22px;
  // height: 130px;
  margin-bottom: 20px;
`;

export const League = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  margin-right: 22px;
`;

export const Game = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.red};
`;
