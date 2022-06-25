import styled from 'styled-components';

interface Props {
  isReverse?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
  padding: 0.2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const CS = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
`;

export const KDA = styled.div<Props>`
  display: flex;
  align-items: center;
  border-left: 2px solid ${({ theme }) => theme.colors.white};
  border-right: 2px solid ${({ theme }) => theme.colors.white};

  span {
    display: flex;
    justify-content: center;
    width: 25px;
  }
`;

export const Item = styled.div``;
