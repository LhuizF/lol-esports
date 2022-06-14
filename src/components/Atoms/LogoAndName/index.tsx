import Image from 'next/image';
import React from 'react';
import { Container } from './styles';

interface Props {
  image: string;
  name: string;
  size: number;
}

const LogoAndName: React.FC<Props> = ({ image, name, size }) => {
  return (
    <Container>
      <Image src={image} width={size} height={size} />
      <p>{name}</p>
    </Container>
  );
};

export default LogoAndName;
