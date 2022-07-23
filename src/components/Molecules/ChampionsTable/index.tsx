import React, { useEffect, useState } from 'react';
import { Container, Team, TeamName } from './styles';
import ChampionsContainer from '../PlayersContainer';

interface Props {
  frame: Frame;
  details: DetailsParticipant[];
  gameMetadata: TeamsGameMetadata;
  ddragon: Ddragon;
}

const ChampionsTable: React.FC<Props> = ({ frame, gameMetadata, details, ddragon }) => {
  const [playersBlue, setPlayersBlue] = useState<Player[]>([]);
  const [playersRed, setPlayersRed] = useState<Player[]>([]);

  useEffect(() => {
    const { blueTeam, redTeam } = frame;
    const { blueTeamMetadata, redTeamMetadata } = gameMetadata;

    setPlayersBlue(
      setPlayers(blueTeam.participants, blueTeamMetadata, redTeam.participants)
    );
    setPlayersRed(
      setPlayers(redTeam.participants, redTeamMetadata, blueTeam.participants)
    );
  }, [frame]);

  const setPlayers = (
    team: ParticipantFrame[],
    size: TeamMetadata,
    rival: ParticipantFrame[]
  ): Player[] => {
    const { participantMetadata } = size;
    return team.map((player, i) => {
      const [detail] = details.filter(
        (detail) => detail.participantId === player.participantId
      );

      const rivalTotalGold = rival[i].totalGold;

      const goldGap = player.totalGold - rivalTotalGold;

      return { ...player, ...participantMetadata[i], ...detail, goldGap };
    });
  };

  return (
    <Container>
      <Team>
        <TeamName>{gameMetadata.blueTeamName}</TeamName>
        {playersBlue.map((player, index) => (
          <ChampionsContainer key={index} player={player} ddragon={ddragon} />
        ))}
      </Team>
      <Team isReverse>
        <TeamName>{gameMetadata.redTeamName}</TeamName>
        {playersRed.map((player, index) => (
          <ChampionsContainer key={index} player={player} ddragon={ddragon} isReverse />
        ))}
      </Team>
    </Container>
  );
};

export default ChampionsTable;
