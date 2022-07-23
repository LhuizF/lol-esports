import styled from 'styled-components';
import { ItemContainer } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  img {
    width: 100%;
  }

  div {
    width: 14px;
    height: 14px;
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      width: 100%;
    }
  }
`;
