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
  padding: 2px;
  min-height: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row-reverse;
  }
`;

export const Item = styled(ItemContainer)`
  width: 35px;
  height: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 25px;
    height: 25px;
  }
`;

export const Trinket = styled(Item)<Props>`
  position: absolute;

  ${({ isReverse }) => (isReverse ? 'right: 0.2rem' : 'left: 0.2rem')};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: auto;
    right: 0.2rem;
  }
`;
