import React from 'react';
import { getGameState } from '../../../utils';
import Logo from '../../Atoms/Logo';
import Scoreboard from '../../Molecules/Scoreboard';
import { Container, Header, Text } from './styles';

interface Props {
  teams: Team[];
  frame: Frame;
}

const DisplayGame: React.FC<Props> = ({ teams, frame }) => {
  console.log('teams', teams);
  console.log('frame', frame);
  const [blueSize, redSize] = teams;
  const { blueTeam, redTeam, gameState } = frame;

  return (
    <Container>
      <Header>
        <Logo image={blueSize.image} size={50} />
        <Text>{blueSize.name}</Text>
        <Text>
          <h2>VS</h2>
          <span>{getGameState(gameState)}</span>
        </Text>
        <Text>{redSize.name}</Text>
        <Logo image={redSize.image} size={50} />
      </Header>
      <Scoreboard blueTeam={blueTeam} redTeam={redTeam} />
    </Container>
  );
};

export default DisplayGame;
