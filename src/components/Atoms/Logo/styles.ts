import styled from 'styled-components';

interface Props {
  minHeight: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  ${({ minHeight }) => minHeight && ` height: 120px;`}
  box-sizing: border-box;

  p {
    font-size: 1rem;
    text-align: center;
  }
`;
