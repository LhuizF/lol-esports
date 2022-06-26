import styled from 'styled-components';

interface Props {
  isReverse?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
  margin: 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grey};
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
  margin: 0 1rem;

  span {
    display: flex;
    justify-content: center;
    width: 25px;
  }
`;

interface PropsItem extends Props {
  isTrinket: boolean;
}

export const Item = styled.div<PropsItem>`
  ${({ isTrinket }) => (isTrinket ? ' position: absolute' : ' position: static')};
  ${({ isReverse }) => (isReverse ? 'right: 0' : 'left: 0')};
  z-index: 1;
  margin: 0 2px;
`;
