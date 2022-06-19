import Image from 'next/image';
import React from 'react';
import { Container } from './styles';

interface Props {
  image: string;
  name?: string;
  size: number;
}

const Logo: React.FC<Props> = ({ image, name, size }) => {
  return (
    <Container minHeight={!!name}>
      <Image src={image} width={size} height={size} />
      {name && <p>{name}</p>}
    </Container>
  );
};

export default Logo;
