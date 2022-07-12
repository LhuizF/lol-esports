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

  div {
    margin-right: 10px;
    display: flex;
    /* border-left: 2px solid ${({ theme }) => theme.colors.white};
    border-right: 2px solid ${({ theme }) => theme.colors.white}; */
    width: 80px;
    box-sizing: border-box;

    span {
      text-align: center;
      width: 65px;
    }
  }

  p {
    text-align: center;
    width: 40px;
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
  margin: 0 1rem;

  button {
    color: ${({ theme }) => theme.colors.white};
    width: fit-content;
    height: fit-content;
  }
`;
