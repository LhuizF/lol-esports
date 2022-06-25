import React, { useEffect, useState } from 'react';
import { Container, Team } from './styles';
import ChampionsContainer from '../../Atoms/ChampionsContainer';

interface Props {
  frame: Frame;
  details: DetailsParticipant[];
  blueSize: TeamMetadata;
  redSize: TeamMetadata;
}

const ChampionsTable: React.FC<Props> = ({ frame, blueSize, redSize, details }) => {
  const [playersBlue, setPlayersBlue] = useState<Player[]>([]);
  const [playersRed, setPlayersRed] = useState<Player[]>([]);

  useEffect(() => {
    const { blueTeam, redTeam } = frame;

    setPlayersBlue(setPlayers(blueTeam.participants, blueSize));
    setPlayersRed(setPlayers(redTeam.participants, redSize));
  }, [frame]);

  const setPlayers = (team: ParticipantFrame[], size: TeamMetadata): Player[] => {
    const { participantMetadata } = size;
    return team.map((player, i) => {
      const [detail] = details.filter(
        (detail) => detail.participantId === player.participantId
      );

      return { ...player, ...participantMetadata[i], ...detail };
    });
  };

  return (
    <Container>
      <Team>
        {playersBlue.map((player, index) => (
          <ChampionsContainer key={index} player={player} />
        ))}
      </Team>
      <Team isReverse>
        {playersRed.map((player, index) => (
          <ChampionsContainer key={index} player={player} isReverse />
        ))}
      </Team>
    </Container>
  );
};

export default ChampionsTable;
