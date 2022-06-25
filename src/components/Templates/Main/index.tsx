import Head from 'next/head';
import React from 'react';
import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Main: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `Esports Live - ${title}` : 'Esports Live'}</title>
      </Head>
      <Container>{children}</Container>
    </>
  );
};

export default Main;
