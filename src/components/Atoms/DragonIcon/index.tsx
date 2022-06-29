import React from 'react';
import { Container } from './styles';
import { dragonsIcons as icons } from '../../../utils/svg';

export type Type = keyof typeof icons;

interface Props {
  dragon: Type;
}

const DragonIcon: React.FC<Props> = ({ dragon }) => {
  return (
    <Container title={icons[dragon].name}>
      <svg
        className="icon"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path className="shape" fill={icons[dragon].color} d={icons[dragon].path}></path>
      </svg>
    </Container>
  );
};

export default DragonIcon;
