import styled from 'styled-components';
import { ItemContainer } from '../../../styles';

interface Props {
  isReverse?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
  justify-content: flex-end;
  position: relative;
  padding: 0.2rem;
`;

export const Item = styled(ItemContainer)``;

export const Trinket = styled.div<Props>`
  position: absolute;
  margin: 0 2px;
  height: 40px;

  ${({ isReverse }) => (isReverse ? 'right: 0.2rem' : 'left: 0.2rem')};
  z-index: 1;
`;
