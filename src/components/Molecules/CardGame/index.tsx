import React from 'react';
import Logo from '../../Atoms/Logo';
import { Container, VersusLogo, Team } from './styles';
import { RiCloseLine } from 'react-icons/ri';
interface Props {
  teams: Team[];
}

const CardGame: React.FC<Props> = ({ teams }) => {
  const [blueSize, redSize] = teams;

  return (
    <Container>
      <Team>
        <Logo image={blueSize.image} name={blueSize.name} />
      </Team>

      <VersusLogo>
        <RiCloseLine size={50} />
      </VersusLogo>

      <Team>
        <Logo image={redSize.image} name={redSize.name} />
      </Team>
    </Container>
  );
};

export default CardGame;
