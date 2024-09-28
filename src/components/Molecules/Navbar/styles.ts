import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > div {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    position: absolute;
    left: 20px;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

  }
`;
