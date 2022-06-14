import React from 'react';
import LogoAndName from '../../Atoms/LogoAndName';
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
        <LogoAndName image={blueSize.image} name={blueSize.name} size={70} />
      </Team>

      <VersusLogo>
        <RiCloseLine size={50} />
      </VersusLogo>

      <Team>
        <LogoAndName image={redSize.image} name={redSize.name} size={70} />
      </Team>
    </Container>
  );
};

export default CardGame;
