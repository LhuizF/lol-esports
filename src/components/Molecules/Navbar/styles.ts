import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    position: absolute;
    left: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
