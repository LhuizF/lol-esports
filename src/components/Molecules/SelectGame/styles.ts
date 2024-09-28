import styled, { keyframes, css } from 'styled-components';

interface Props {
  total: number;
}

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.total}, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
`;

interface ButtonProps {
  active: boolean;
  inLive: boolean;
}

const blink = keyframes`
  0% {
    box-shadow: 0 0 10px 4px #e8303093;
  }
  50% {
    box-shadow: 0 0 4px 4px #e8303093;
  }
  100% {
    box-shadow: 0 0 10px 4px #e8303093;
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  color: ${({ inLive }) => (inLive ? '#e83030' : '#fff')};
  border: 1px solid ${({ inLive }) => (inLive ? '#e83030' : '#ccc')};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  ${({ active }) => active && `background-color: #383C40;`}

  animation: ${({ inLive }) =>
    inLive
      ? css`
          ${blink} 2s linear infinite;
        `
      : ''};

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  padding: 4px;

  span {
    font-size: 0.7rem;
  }
}
`;
