import styled from 'styled-components';

interface Props {
  isReverse?: boolean;
  border?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row' : 'row-reverse')};
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const Item = styled.div<Props>`
  display: flex;
  align-items: flex-end;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row' : 'row-reverse')};
  padding: 4px 0;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin: 0 5px;

  div {
    display: flex;
    /* border-left: 2px solid ${({ theme }) => theme.colors.white};
    border-right: 2px solid ${({ theme }) => theme.colors.white}; */
    width: 50px;
    box-sizing: border-box;
    align-items: center;
  }

  span {
    text-align: center;
    margin-top: 4px;
    flex: 1;
  }

  p {
    text-align: center;
    flex: 1;
  }
`;

interface ContentProps {
  flex?: number;
  minWidth?: number;
}

export const Content = styled.div<ContentProps>`
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth}px;`}
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;

  button {
    color: ${({ theme }) => theme.colors.white};
    width: fit-content;
    height: fit-content;
  }
`;

interface GoldProps {
  isPositive?: boolean;
}

export const GoldContainer = styled(Item)<GoldProps>`
  span:last-of-type {
    color: ${({ isPositive, theme }) =>
      isPositive ? theme.colors.positive : theme.colors.negative};
  }
`;
