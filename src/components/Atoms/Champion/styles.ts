import styled from 'styled-components';
import { ItemContainer } from '../../../styles';

interface Props {
  isDead: boolean;
}

export const Container = styled(ItemContainer)<Props>`
  margin: 0;
  height: 45px;
  border: ${({ theme }) => theme.colors.black} 2px solid;
  ${({ isDead }) => isDead && 'filter: grayscale(1);'}
  min-width: 45px;

  p {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
