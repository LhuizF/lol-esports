import styled from 'styled-components';

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

export const Button = styled.button<ButtonProps>`
  background-color: #ccc;
  border: 1px solid ${({ inLive }) => (inLive ? '#e83030' : '#ccc')};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  ${({ active }) => active && `background: red;`}
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;

  ${({ inLive }) => inLive && `box-shadow: 0 0 10px 4px #e8303093;`}
`;
