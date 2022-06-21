import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Main from '../../components/Templates/Main';
import { api, apiGame } from '../../services/api';
import Logo from '../../components/Atoms/Logo';
import { getDateFormatted } from '../../utils';
import DisplayGame from '../../components/Organisms/DisplayGame';

const Game: NextPage = () => {
  const [events, setEvents] = useState<EventGame>();
  const [gameNumber, setGameNumber] = useState<number>(0);
  const [windowGame, setWindowGame] = useState<WindowGame>();
  const [lastFrame, setLastFrame] = useState<Frame>();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState<string>('');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const params = { id };

    const getDate = async () => {
      const events: EventGame = await api
        .get(`getEventDetails`, { params })
        .then((res) => res.data.data.event);

      const { games } = events.match;
      setEvents(events);
      getGameWindow(games);
    };

    getDate();
  }, [id]);

  const getGameWindow = useCallback(
    async (game: Game[]) => {
      const params = {
        startingTime: getDateFormatted()
      };

      const windowGame: WindowGame = await apiGame
        .get(`window/${game[gameNumber].id}`, { params })
        .then((res) => res.data);

      setWindowGame(windowGame);
    },
    [gameNumber]
  );

  useEffect(() => {
    if (!events || !windowGame) return;
    const codeTeams = events.match.teams.map((team) => team.code).join(' vs ');

    setLastFrame(windowGame.frames[windowGame.frames.length - 1]);
    setTitle(codeTeams);
    setLoading(false);
  }, [events, windowGame]);

  useEffect(() => {
    setInterval(() => {
      console.log('getGameWindow');
      getGameWindow(events.match.games);
    }, 70000);
  }, []);

  return (
    <Main title={title}>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <Logo
            height={120}
            image={events?.league.image}
            name={events?.league.name}
            size={80}
          />
          <DisplayGame frame={lastFrame} teams={events.match.teams} />
        </>
      )}
    </Main>
  );
};

export default Game;
