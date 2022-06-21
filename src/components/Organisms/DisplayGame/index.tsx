import React from 'react';
import { Container, Header, Text } from './styles';
import { getGameState } from '../../../utils';
import Logo from '../../Atoms/Logo';
import Scoreboard from '../../Molecules/Scoreboard';
import ChampionsTable from '../../Molecules/ChampionsTable';

interface Props {
  teams: Team[];
  frame: Frame;
  metadata: GameMetadata;
}

const DisplayGame: React.FC<Props> = ({ teams, frame, metadata }) => {
  const [blueSize, redSize] = teams;
  const { gameState } = frame;
  const { blueTeamMetadata, redTeamMetadata } = metadata;

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
      <ChampionsTable
        frame={frame}
        blueSize={blueTeamMetadata}
        redSize={redTeamMetadata}
      />
    </Container>
  );
};

export default DisplayGame;
