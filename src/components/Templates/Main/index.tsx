import Head from 'next/head';
import React from 'react';
import { Container, Content } from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
  isGame?: boolean;
}

const Main: React.FC<Props> = ({ children, title, isGame }) => {
  return (
    <>
      <Head>
        <title>{title ? `Esports Live - ${title}` : 'Esports Live'}</title>
      </Head>
      <Container>{isGame ? children : <Content>{children}</Content>}</Container>
    </>
  );
};

export default Main;
