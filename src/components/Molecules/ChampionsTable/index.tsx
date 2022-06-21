import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ddragonApi } from '../../../services/api';
import { Container, Team, ChampionsContainer } from './styles';

interface Props {
  frame: Frame;
  blueSize: TeamMetadata;
  redSize: TeamMetadata;
}

interface Player extends ParticipantFrame, ParticipantMetadata { }

const ChampionsTable: React.FC<Props> = ({ frame, blueSize, redSize }) => {
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
      return { ...player, ...participantMetadata[i] };
    });
  };

  return (
    <Container>
      <Team>
        {playersBlue.map((player, index) => {
          return (
            <ChampionsContainer
              key={index}
              title={`${player.summonerName} - ${player.championId}`}
            >
              <Image
                src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${player.championId}.png`}
                width={50}
                height={50}
              />
            </ChampionsContainer>
          );
        })}
      </Team>
      <Team isReverse>
        {playersRed.map((player, index) => {
          return (
            <ChampionsContainer
              key={index}
              title={`${player.summonerName} - ${player.championId}`}
            >
              <Image
                src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${player.championId}.png`}
                width={50}
                height={50}
              />
            </ChampionsContainer>
          );
        })}
      </Team>
    </Container>
  );
};

export default ChampionsTable;
