import React from 'react';
import { Container } from './styles';

interface Props {
  image: string;
  name?: string;
  size: number;
  height?: number;
}

const Logo: React.FC<Props> = ({ image, name, size, height }) => {
  return (
    <Container height={height}>
      <img src={image} width={size} height={size} alt={name} />
      {name && <p>{name}</p>}
    </Container>
  );
};

export default Logo;
