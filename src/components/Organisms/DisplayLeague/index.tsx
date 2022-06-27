import React from 'react';
import CardGame from '../../Molecules/CardGame';
import { Container, League, Game } from './styles';
import Logo from '../../Atoms/Logo';
import { getGameState } from '../../../utils';

interface Props {
  events: EventGame;
}

const DisplayLeague: React.FC<Props> = ({ events }) => {
  return (
    <Container>
      <League>
        <Logo
          height={120}
          image={events.league.image}
          name={events.league.name}
          size={80}
        />
      </League>
      <Game>
        <h3>{getGameState(events.state)}</h3>
        <a href={`game/${events.match.id}`} target="_blank" rel="noreferrer">
          <CardGame teams={events.match.teams} />
        </a>
      </Game>
    </Container>
  );
};

export default DisplayLeague;
