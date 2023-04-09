import React from 'react';
import { Container, Content } from './styles';
import { Helmet } from 'react-helmet';

interface Props {
  children: React.ReactNode;
  title: string;
  isGame?: boolean;
}

const Main: React.FC<Props> = ({ children, title, isGame }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `Esports Live - ${title}` : 'Esports Live'}</title>
      </Helmet>
      <Container>{isGame ? children : <Content>{children}</Content>}</Container>
    </>
  );
};

export default Main;
