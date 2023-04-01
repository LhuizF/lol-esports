import React from 'react';
import { Container } from './styles';

interface Props {
  player: Player;
}

const ChampionContainer: React.FC<Props> = ({ player }) => {
  const version = localStorage.getItem('version');

  return (
    <Container isDead={player.currentHealth === 0}>
      <img
        alt={player.championId}
        title={`${player.summonerName} - ${player.championId}`}
        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${player.championId}.png`}
      />
      <p>{player.level}</p>
    </Container>
  );
};

export default ChampionContainer;
