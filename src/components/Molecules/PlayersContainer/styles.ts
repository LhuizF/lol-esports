import styled from 'styled-components';

interface Props {
  isReverse?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row' : 'row-reverse')};
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grey};

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Item = styled.div<Props>`
  height: 50%;
  display: flex;
  align-items: flex-end;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row' : 'row-reverse')};
  padding: 4px 0;
  box-sizing: border-box;

  div {
    margin-right: 10px;
    display: flex;
    align-items: center;
    border-left: 2px solid ${({ theme }) => theme.colors.white};
    border-right: 2px solid ${({ theme }) => theme.colors.white};

    span {
      display: flex;
      justify-content: center;
      min-width: 20px;
    }
  }

  p {
    text-align: center;
    width: 40px;
  }
`;

interface ContentProps {
  flex?: number;
}

export const Content = styled.div<ContentProps>`
  ${({ flex }) => flex && `flex: ${flex};`}
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;

  button {
    color: ${({ theme }) => theme.colors.white};
    width: fit-content;
    height: fit-content;
  }
`;
