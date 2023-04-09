import React from 'react';
import Main from '@/components/Templates/Main';
import DisplayLeague from '@/components/Organisms/DisplayLeague';
import Loading from '@/components/Atoms/Loading';
import Title from '@/components/Atoms/Title';
import Text from '@/components/Atoms/Text';
import { useLolEsportsApi, getVersion } from '@/hooks/useFetch';

const Home: React.FC = () => {
  const { data, error, isLoading } = useLolEsportsApi<LiveType>('/getLive');

  if (error) return <div>error</div>;
  if (isLoading) return <Loading />;
  const events = data.data.schedule.events.filter((event) => !!event.match);
  getVersion();

  return (
    <Main title="Scoreboard">
      <Title text="Jogos ao vivos" />
      {events.length > 0 ? (
        events.map((game, i) => <DisplayLeague key={i} events={game} />)
      ) : (
        <Text text="Não há jogos ao vivo" />
      )}
    </Main>
  );
};

export default Home;
