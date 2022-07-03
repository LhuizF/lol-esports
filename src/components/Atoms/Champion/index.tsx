import React from 'react';
import Image from 'next/image';
import { Container } from './styles';

interface Props {
  player: Player;
}

const ChampionContainer: React.FC<Props> = ({ player }) => {
  return (
    <Container isDead={player.currentHealth === 0}>
      <Image
        title={`${player.summonerName} - ${player.championId}`}
        src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${player.championId}.png`}
        width={50}
        height={50}
      />
      <p>{player.level}</p>
    </Container>
  );
};

export default ChampionContainer;
