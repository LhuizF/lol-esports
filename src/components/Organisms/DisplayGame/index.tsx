import React, { useEffect } from 'react';
import { getGameState } from '../../../utils';
import Logo from '../../Atoms/Logo';
import Scoreboard from '../../Molecules/Scoreboard';
import { Container, Header, Text } from './styles';

interface Props {
  teams: Team[];
  frame: Frame;
}

const DisplayGame: React.FC<Props> = ({ teams, frame }) => {
  const [blueSize, redSize] = teams;
  const { gameState } = frame;

  return (
    <Container>
      <Header>
        <Logo image={blueSize.image} size={60} />
        <p>{blueSize.name}</p>
        <Text>
          <h2>VS</h2>
          <span>{getGameState(gameState)}</span>
        </Text>
        <p>{redSize.name}</p>
        <Logo image={redSize.image} size={60} />
      </Header>
      <Scoreboard frame={frame} />
    </Container>
  );
};

export default DisplayGame;
