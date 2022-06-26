import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
`;
