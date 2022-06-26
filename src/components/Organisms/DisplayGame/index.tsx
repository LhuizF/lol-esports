import React, { useCallback, useEffect, useState } from 'react';
import { Container, Header, Text } from './styles';
import { getDateFormatted, getGameState } from '../../../utils';
import Logo from '../../Atoms/Logo';
import Scoreboard from '../../Molecules/Scoreboard';
import ChampionsTable from '../../Molecules/ChampionsTable';
import { apiGame } from '../../../services/api';

interface Props {
  match: Match;
  gameNumber: number;
  items: any;
}

const DisplayGame: React.FC<Props> = ({ match, gameNumber, items }) => {
  const [lastFrame, setLastFrame] = useState<Frame>();
  const [detailsGame, setDetailsGame] = useState<FramesDetails>();
  const [windowGame, setWindowGame] = useState<WindowGame>();
  const [loading, setLoading] = useState(true);

  const [blueSize, redSize] = match.teams;

  const getGameWindow = async (gameId = '0') => {
    const params = {
      startingTime: getDateFormatted()
    };

    const windowGame: WindowGame = await apiGame
      .get(`window/${gameId}`, { params })
      .then((res) => res.data)
      .catch((err) => console.error(err.data));

    const detailsGame: DetailsGame = await apiGame
      .get(`details/${gameId}`, { params })
      .then((res) => res.data)
      .catch((err) => console.error(err.data));

    if (!windowGame || !detailsGame) {
      console.log('windowGame', windowGame);
      console.log('frames', detailsGame);
      console.log('::: JOGO SEM API :::');
      return;
    }

    const frames = detailsGame.frames;

    setLastFrame(windowGame.frames[windowGame.frames.length - 1]);
    setDetailsGame(frames[frames?.length - 1]);
    setWindowGame(windowGame);
    setLoading(false);
  };

  useEffect(() => {
    if (!match) return;
    const id = match.games[gameNumber].id;
    getGameWindow(id);
    setInterval(() => {
      getGameWindow(id);
    }, 6000);
  }, [match, gameNumber]);

  return (
    <Container>
      {loading ? (
        <Text>Jogo ainda não inciado</Text>
      ) : (
        <>
          <Header>
            <Logo image={blueSize.image} size={60} />
            <p>{blueSize.name}</p>
            <Text>
              <h2>VS</h2>
              <span>{getGameState(lastFrame.gameState)}</span>
            </Text>
            <p>{redSize.name}</p>
            <Logo image={redSize.image} size={60} />
          </Header>
          <Scoreboard frame={lastFrame} />
          <ChampionsTable
            frame={lastFrame}
            details={detailsGame.participants}
            gameMetadata={windowGame.gameMetadata}
            items={items}
          />
        </>
      )}
    </Container>
  );
};

export default DisplayGame;
