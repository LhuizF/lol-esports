import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};

  div {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-top: 2px solid ${({ theme }) => theme.colors.red};
    animation: ${loading} 1s linear infinite;
    cursor: progress;
  }
`;
