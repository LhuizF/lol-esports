import styled from 'styled-components';

interface Props {
  currentHealth: number;
  isReverse?: boolean;
}

export const Container = styled.div<Props>`
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: ${({ isReverse }) => (isReverse ? 'flex-start' : 'flex-end')};
  position: relative;

  div {
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    display: flex;
    justify-content: ${({ isReverse }) => (isReverse ? 'flex-start' : 'flex-end')};

    span {
      width: ${({ currentHealth }) => `${currentHealth}%`};
      height: 20px;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.life};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 1s ease-in-out;
    }
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

