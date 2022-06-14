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
      //console.log('events', events);
      const gamesLol = events.filter((event) => event.type === 'match');
      setLiveGames(gamesLol);
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    //console.log(liveGames);
  }, [liveGames]);

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
