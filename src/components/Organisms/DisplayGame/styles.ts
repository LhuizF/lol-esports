import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.greySecondary};
  margin: 0;
  width: 80%;
  padding: 0.5rem 1rem 1rem;
  box-sizing: border-box;
  max-width: 1000px;
  border-radius: 10px;

  @media (max-width: 1420px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    width: 95%;
    margin-top: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    width: 160px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    hr {
      width: 90%;
      height: 3px;
      margin-top: 4px;
      background-color: red;
      border-radius: 5px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.5rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h2 {
      font-size: 1rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;
