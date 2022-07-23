import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  height: 130px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
  }
`;

export const VersusLogo = styled.div`
  margin: 0 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Team = styled.div`
  width: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80%;
  }
`;
