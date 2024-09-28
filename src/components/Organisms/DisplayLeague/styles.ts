import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  padding: 22px;
  // height: 130px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const League = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  margin-right: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.red};

  h3 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border: none;

    h3 {
      font-size: 0.8rem;
    }
  }
`;
