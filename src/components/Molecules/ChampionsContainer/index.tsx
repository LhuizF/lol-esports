import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, CS, KDA, Item, Trinket, Champion } from './styles';

interface Props {
  player: Player;
  isReverse?: boolean;
  items: PlayerItem;
}

const ChampionsContainer: React.FC<Props> = ({ player, isReverse, items }) => {
  const [itemsPlayer, setItemsPlayer] = useState<PlayerItem[]>([]);

  useEffect(() => {
    const itensWithId = player.items
      .map((i) => {
        return { ...items[i], id: i };
      })
      .sort((a, b) => a.gold.total - b.gold.total);

    const itemsPlayer = itensWithId.map((item) => {
      if (item.stacks >= 2) {
        const stacksCurrent = player.items.filter((i) => i === item.id).length;
        return { ...item, stacksCurrent: stacksCurrent };
      }
      return item;
    });

    setItemsPlayer(itemsPlayer);
  }, [player, items]);

  return (
    <Container isReverse={isReverse}>
      {itemsPlayer.map((item, index) =>
        !item.tags.includes('Trinket') ? (
          <Item key={index} title={item.name}>
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${item.id}.png`}
              width={40}
              height={40}
            />
            <p>{item.stacks > 0 && item.stacksCurrent}</p>
          </Item>
        ) : (
          <Trinket isReverse={isReverse} key={index} title={item.name}>
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${item.id}.png`}
              width={40}
              height={40}
            />
          </Trinket>
        )
      )}

      <KDA>
        <span>{player.kills}</span>
        <span>{player.deaths}</span>
        <span>{player.assists}</span>
      </KDA>
      <CS>{player.creepScore}</CS>
      <Champion isDead={player.currentHealth === 0}>
        <Image
          title={`${player.summonerName} - ${player.championId}`}
          src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${player.championId}.png`}
          width={50}
          height={50}
        />
        <p>{player.level}</p>
      </Champion>
    </Container>
  );
};

export default ChampionsContainer;
