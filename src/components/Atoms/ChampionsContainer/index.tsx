import React from 'react';
import Image from 'next/image';
import { Container, CS, KDA, Item } from './styles';

interface Props {
  player: Player;
  isReverse?: boolean;
}

const ChampionsContainer: React.FC<Props> = ({ player, isReverse }) => {
  // const itemsPlayer = () => {

  // }

  return (
    <Container isReverse={isReverse}>
      {player.items.map((item, index) => (
        <Item key={index} title={item.toString()}>
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${item}.png`}
            width={40}
            height={40}
          />
        </Item>
      ))}

      <KDA>
        <span>{player.kills}</span>
        <span>{player.deaths}</span>
        <span>{player.assists}</span>
      </KDA>
      <CS>{player.creepScore}</CS>
      <Image
        title={`${player.summonerName} - ${player.championId}`}
        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${player.championId}.png`}
        width={50}
        height={50}
      />
    </Container>
  );
};

export default ChampionsContainer;
