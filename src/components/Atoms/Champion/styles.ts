import styled from 'styled-components';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ChampionProps {
  isDead: boolean;
}

export const Champion = styled(Item) <ChampionProps>`
  height: 50px;
  border: ${({ theme }) => theme.colors.black} 2px solid;
  ${({ isDead }) => isDead && 'filter: grayscale(1);'}

  p {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

export const Runes = styled.div`
  position: relative;
  width: 40px;

  div {
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      width: 16px;
    }
  }
`;
