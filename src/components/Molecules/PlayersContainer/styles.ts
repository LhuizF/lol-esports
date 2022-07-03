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
  padding: 0.2rem;
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

export const Item = styled.div`
  margin: 0 2px;
  position: relative;
  height: 40px;

  p {
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 16px;
  }
`;

export const Trinket = styled.div<Props>`
  position: absolute;
  margin: 0 2px;
  height: 40px;

  ${({ isReverse }) => (isReverse ? 'right: 0.2rem' : 'left: 0.2rem')};
  z-index: 1;
`;

interface ChampionProps {
  isDead: boolean;
}

export const Champion = styled(Item)<ChampionProps>`
  height: 50px;
  border: ${({ theme }) => theme.colors.black} 2px solid;
  ${({ isDead }) => isDead && 'filter: grayscale(1);'}

  p {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

interface PropsA {
  flex?: number;
}

export const Content = styled.div<PropsA>`
  ${({ flex }) => flex && `flex: ${flex};`}
`;
