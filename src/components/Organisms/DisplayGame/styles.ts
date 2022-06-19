import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    margin-top: 0.5rem;
  }
`;
