import React, { useEffect, useState } from 'react';
import { Container, Header, Text } from './styles';
import { getDateFormatted, getGameState } from '../../../utils';
import Logo from '../../Atoms/Logo';
import Scoreboard from '../../Molecules/Scoreboard';
import ChampionsTable from '../../Molecules/ChampionsTable';
import Loading from '../../Atoms/Loading';
import { apiDataDragon, useFrameApi } from '../../../hooks/useFetch';

interface Props {
  match: Match;
  gameNumber: number;
}

const DisplayGame: React.FC<Props> = ({ match, gameNumber }) => {
  const [noApi, setNoApi] = useState(false);
  const [ddragon, setDdragon] = useState<Ddragon>();

  const [blueSize, redSize] = match.teams;
  const {
    data: windowResponse,
    error: errorWindow,
    isLoading: isLoadingResponse
  } = useFrameApi<WindowGame>(`/window/${match.games[gameNumber].id}`);

  const {
    data: detailsResponse,
    error: errorDetails,
    isLoading: isLoadingDetails
  } = useFrameApi<DetailsGame>(`/details/${match.games[gameNumber].id}`);

  useEffect(() => {
    (async () => {
      const items = await apiDataDragon('item');
      const runes = await apiDataDragon('runesReforged');
      setDdragon({ items: items.data, runes });
    })();
  }, []);

  if (errorWindow || errorDetails || !windowResponse?.frames) {
    const msg =
      match.games[gameNumber].state === 'inProgress'
        ? 'Jogo ainda não iniciado ou no draft'
        : 'Jogo ainda não iniciado';

    return <Text>{msg}</Text>;
  }

  if (isLoadingResponse || isLoadingDetails || !ddragon) {
    return <Loading />;
  }

  const frame = windowResponse.frames[windowResponse.frames?.length - 1];
  const { participants } = detailsResponse.frames[detailsResponse.frames?.length - 1];

  console.log(blueSize);

  return (
    <Container>
      {noApi ? (
        <Text>Jogo ainda não inciado</Text>
      ) : (
        <>
          <Header>
            <Logo image={blueSize.image} size={60} name={blueSize.name} />
            <div>
              <p>{blueSize.name}</p>
              {blueSize.result.gameWins > 0 && <hr />}
            </div>
            <Text>
              <h2>VS</h2>
              <span>{getGameState(frame.gameState)}</span>
            </Text>
            {redSize.result.gameWins > 0 && <hr />}
            <p>{redSize.name}</p>
            <Logo image={redSize.image} size={60} name={redSize.name} />
          </Header>

          <Scoreboard frame={frame} />
          <ChampionsTable
            frame={frame}
            details={participants}
            ddragon={ddragon}
            gameMetadata={{
              ...windowResponse.gameMetadata,
              blueTeamName: blueSize.name,
              redTeamName: redSize.name
            }}
          />
        </>
      )}
    </Container>
  );
};

export default DisplayGame;
