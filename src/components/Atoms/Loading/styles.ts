import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.red};
  height: 176px;
  cursor: progress;
  background: #727272;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-top: 2px solid ${({ theme }) => theme.colors.red};
    animation: ${loading} 1s linear infinite;
  }
`;
