import React from 'react';
import CardGame from '../../Molecules/CardGame';
import { Container, League, Game } from './styles';
import Logo from '../../Atoms/Logo';
import { getGameState } from '../../../utils';
import { Link } from 'react-router-dom';

interface Props {
  events: EventGame;
}

const DisplayLeague: React.FC<Props> = ({ events }) => {
  if (!events.match) return <></>;

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
        <Link to={`/game/${events.match.id}`}>
          <CardGame teams={events.match.teams} />
        </Link>
      </Game>
    </Container>
  );
};

export default DisplayLeague;
