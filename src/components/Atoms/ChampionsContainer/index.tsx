import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, CS, KDA, Item } from './styles';

interface Props {
  player: Player;
  isReverse?: boolean;
  items: any;
}

const ChampionsContainer: React.FC<Props> = ({ player, isReverse, items }) => {
  const [itemsPlayer, setItemsPlayer] = useState([]);

  useEffect(() => {
    const itemsPlayer = player.items
      .map((i) => items[i])
      .sort((a, b) => a.gold.total - b.gold.total);

    setItemsPlayer(itemsPlayer);
  }, [player, items]);

  const isTrinket = (item) => {
    return ['Trinket', 'Vision'].map((code) => item.tags.includes(code)).includes(true);
  };

  return (
    <Container isReverse={isReverse}>
      {itemsPlayer.map((item, index) => {
        return (
          <Item
            isReverse={isReverse}
            key={index}
            title={item.toString()}
            isTrinket={isTrinket(item)}
          >
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${item.image.full}`}
              width={40}
              height={40}
            />
          </Item>
        );
      })}

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
