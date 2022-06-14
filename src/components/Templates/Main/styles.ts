import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 2rem 8rem;
  min-height: 100vh;
  box-sizing: border-box;
`;
