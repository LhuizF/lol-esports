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
  box-sizing: border-box;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height:60px;
    p {
      display: none;
    }
  }
`;
