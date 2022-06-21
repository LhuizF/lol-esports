import styled from 'styled-components';

interface Props {
  height?: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  height: ${({ height }) => (height ? height : 'auto')};
  box-sizing: border-box;

  p {
    font-size: 1rem;
    text-align: center;
  }
`;
