import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  height: 120px;
  box-sizing: border-box;

  p {
    font-size: 1rem;
    text-align: center;
  }
`;
