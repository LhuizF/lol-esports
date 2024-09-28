import React from 'react';
import { Container } from './styles';

interface Props {
  image: string;
  name?: string;
  height?: number;
}

const Logo: React.FC<Props> = ({ image, name, height }) => {
  return (
    <Container title={name} height={height}>
      <img src={image} alt={name} />
    </Container>
  );
};

export default Logo;
