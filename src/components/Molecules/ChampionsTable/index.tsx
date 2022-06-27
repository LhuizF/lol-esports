import React, { useEffect, useState } from 'react';
import { Container, Team } from './styles';
import ChampionsContainer from '../ChampionsContainer';

interface Props {
  frame: Frame;
  details: DetailsParticipant[];
  gameMetadata: GameMetadata;
  items: any;
}

const ChampionsTable: React.FC<Props> = ({ frame, gameMetadata, details, items }) => {
  const [playersBlue, setPlayersBlue] = useState<Player[]>([]);
  const [playersRed, setPlayersRed] = useState<Player[]>([]);

  useEffect(() => {
    const { blueTeam, redTeam } = frame;
    const { blueTeamMetadata, redTeamMetadata } = gameMetadata;

    setPlayersBlue(setPlayers(blueTeam.participants, blueTeamMetadata));
    setPlayersRed(setPlayers(redTeam.participants, redTeamMetadata));
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
          <ChampionsContainer key={index} player={player} items={items} />
        ))}
      </Team>
      <Team isReverse>
        {playersRed.map((player, index) => (
          <ChampionsContainer key={index} player={player} items={items} isReverse />
        ))}
      </Team>
    </Container>
  );
};

export default ChampionsTable;
