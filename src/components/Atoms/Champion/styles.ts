import styled from 'styled-components';
import { ItemContainer } from '../../../styles';

interface Props {
  isDead: boolean;
}

export const Container = styled(ItemContainer)<Props>`
  margin: 0;
  height: 42px;
  border: ${({ theme }) => theme.colors.black} 2px solid;
  ${({ isDead }) => isDead && 'filter: grayscale(1);'}
  width: 42px;

  p {
    background-color: ${({ theme }) => theme.colors.black};
    width: 14px;
    line-height: 14px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 30px;
    height: 30px;

    p {
      font-size: 10px;
      line-height: 10px;
      width: 10px;
    }
  }
`;
