import React, { useEffect, useState } from 'react';
import CardGame from '../../Molecules/CardGame';
import { Container, League, Game } from './styles';
import LogoAndName from '../../Atoms/LogoAndName';

interface Props {
  events: EventGame;
}

const DisplayLeague: React.FC<Props> = ({ events }) => {
  const [currentGame, setCurrentGame] = useState<Game>();

  useEffect(() => {
    const [currentGame] = events.match.games.filter(
      (game) => game.state === 'inProgress'
    );

    console.log('events', events);

    setCurrentGame(currentGame);
  }, [events]);

  return (
    <Container>
      <League>
        <LogoAndName
          image={events.league.image}
          name={events.league.name}
          size={80}
        />
      </League>
      <Game>
        <a
          href={`game?matchId=${events.match.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <CardGame teams={events.match.teams} />
        </a>
      </Game>
    </Container>
  );
};

export default DisplayLeague;
