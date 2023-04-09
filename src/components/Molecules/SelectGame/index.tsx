import React from 'react';
import { Container, Button } from './styles';
import { getGameState } from '../../../utils';

interface Props {
  games: Game[];
  gameNumber: number;
  setGameNumber: React.Dispatch<React.SetStateAction<number>>;
}

const SelectGame: React.FC<Props> = ({ games, gameNumber, setGameNumber }) => {
  const handleClick = (game: Game, i: number) => {
    if (game.state === 'unstarted') return;
    setGameNumber(i);
  };

  return (
    <Container total={games.length}>
      {games.map((game, i) => {
        return (
          <Button
            key={i}
            onClick={() => handleClick(game, i)}
            active={gameNumber === i}
            disabled={game.state === 'unstarted'}
            inLive={game.state === 'inProgress'}>
            Game {i + 1}
            <span>{getGameState(game.state)}</span>
          </Button>
        );
      })}
    </Container>
  );
};

export default SelectGame;
