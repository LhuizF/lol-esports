import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }
`;
