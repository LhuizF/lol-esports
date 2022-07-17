import React from 'react';
import Image from 'next/image';
import { Container } from './styles';

interface Props {
  player: Player;
}

const ChampionContainer: React.FC<Props> = ({ player }) => {
  const version = localStorage.getItem('version');

  return (
    <Container isDead={player.currentHealth === 0}>
      <Image
        title={`${player.summonerName} - ${player.championId}`}
        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${player.championId}.png`}
        width={45}
        height={45}
      />
      <p>{player.level}</p>
    </Container>
  );
};

export default ChampionContainer;
