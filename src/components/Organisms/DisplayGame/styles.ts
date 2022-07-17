import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.greySecondary};
  margin-top: 2rem;
  width: 80%;
  padding: 0.5rem 1rem 1rem;
  box-sizing: border-box;

  @media (max-width: 1420px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    width: 95%;
    margin-top: 1rem;
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
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
