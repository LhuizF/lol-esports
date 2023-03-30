import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Main from '../../components/Templates/Main';
import { api, apiDdragon } from '../../services/api';
import DisplayGame from '../../components/Organisms/DisplayGame';
import Navbar from '../../components/Molecules/Navbar';
import Loading from '../../components/Atoms/Loading';

const Game: NextPage = () => {
  const [events, setEvents] = useState<EventGame>();
  const [gameNumber, setGameNumber] = useState<number>(4);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState<string>('');
  const [ddragon, setDdragon] = useState<Ddragon>();

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

      const ddragon = await (async () => {
        const items = await apiDdragon('item');
        const runes = await apiDdragon('runesReforged');

        return { items: items.data, runes };
      })();

      setDdragon(ddragon);
      setLoading(false);
    };

    getDate();
  }, [id]);

  return (
    <>
      <Main title={title} isGame>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar league={events?.league} />
            <DisplayGame match={events.match} gameNumber={gameNumber} ddragon={ddragon} />
          </>
        )}
      </Main>
    </>
  );
};

export default Game;
