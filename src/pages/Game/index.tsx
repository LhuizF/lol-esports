import React, { useEffect } from 'react';
import Main from '../../components/Templates/Main';
import DisplayGame from '../../components/Organisms/DisplayGame';
import Navbar from '../../components/Molecules/Navbar';
import Loading from '../../components/Atoms/Loading';
import { useLolEsportsApi } from '../../hooks/useFetch';
import SelectGame from '../../components/Molecules/SelectGame';
import { useParams } from 'react-router-dom';

const Game: React.FC = () => {
  const [gameNumber, setGameNumber] = React.useState(0);
  const { id } = useParams();

  const { data, error, isLoading } = useLolEsportsApi<EventType>('/getEventDetails', {
    id
  });

  useEffect(() => {
    if (data) {
      const { games } = data.data.event.match;
      const game = games.findIndex((game) => game.state === 'inProgress');
      if (game !== -1) setGameNumber(game);
    }
  }, [id, data]);

  if (isLoading || error) return <Loading />;

  const { event } = data.data;
  const title = event.match.teams.map((team) => team.code).join(' vs ');

  return (
    <Main title={title} isGame>
      <Navbar league={event.league} />
      <SelectGame
        games={event.match.games}
        gameNumber={gameNumber}
        setGameNumber={setGameNumber}
      />
      <DisplayGame match={event.match} gameNumber={gameNumber} />
    </Main>
  );
};

export default Game;
