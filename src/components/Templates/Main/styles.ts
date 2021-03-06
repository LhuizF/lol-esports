import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  margin: 50px auto;

  @media (max-width: 1355px) {
    width: 90%;
  }
`;
