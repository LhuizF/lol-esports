import styled from 'styled-components';
import { ItemContainer } from '../../../styles';

interface Props {
  isDead: boolean;
}

export const Container = styled(ItemContainer)<Props>`
  height: 50px;
  border: ${({ theme }) => theme.colors.black} 2px solid;
  ${({ isDead }) => isDead && 'filter: grayscale(1);'}

  p {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
