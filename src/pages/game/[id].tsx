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

      if (!events) return;
      setEvents(events);
      const codeTeams = events.match.teams.map((team) => team.code).join(' vs ');
      setTitle(codeTeams);
      setLoading(false);
    };

    getDate();
  }, [id]);

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
          <DisplayGame match={events.match} gameNumber={gameNumber} />
        </>
      )}
    </Main>
  );
};

export default Game;
