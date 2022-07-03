import styled from 'styled-components';
import { ItemContainer } from '../../../styles';

export const Container = styled(ItemContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      width: 16px;
    }
  }
`;
