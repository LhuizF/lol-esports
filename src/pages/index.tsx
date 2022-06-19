import React, { useState } from 'react';
import { NextPage } from 'next';
import { useEffect } from 'react';
import api from '../services/api';
import Main from '../components/Templates/Main';
import DisplayLeague from '../components/Organisms/DisplayLeague';
import Loading from '../components/Atoms/Loading';
import Title from '../components/Atoms/Title';

const Home: NextPage = () => {
  const [liveGames, setLiveGames] = useState<EventGame[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/getLive?hl=pt-BR').then((res) => {
      const { events }: Schedule = res.data.data.schedule;
      const gamesLol = events.filter((event) => !!event.match);
      setLiveGames(gamesLol);
    });

    setLoading(false);
  }, []);

  return (
    <Main title="eSports - Scoreboard">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title text="Jogos ao vivos" />
          {liveGames.length > 0 &&
            liveGames.map((game, i) => <DisplayLeague key={i} events={game} />)}
        </>
      )}
    </Main>
  );
};

export default Home;
