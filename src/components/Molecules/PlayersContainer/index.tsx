import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, CS, KDA, Item, Trinket, Content } from './styles';
import Champion from '../../Atoms/Champion';
import Runes from '../../Atoms/Runes';

interface Props {
  player: Player;
  isReverse?: boolean;
  ddragon: Ddragon;
}

const PlayersContainer: React.FC<Props> = ({ player, isReverse, ddragon }) => {
  const [itemsPlayer, setItemsPlayer] = useState<PlayerItem[]>([]);

  useEffect(() => {
    const { items } = ddragon;

    const itensWithId = player.items
      .map((i) => {
        return { ...items[i], id: i };
      })
      .sort((a, b) => a.gold.total - b.gold.total);

    const newItems = new Set();
    const filterItems = itensWithId.filter((item) => {
      const duplicatedPerson = newItems.has(item.id);
      newItems.add(item.id);
      return !duplicatedPerson;
    });

    const itemsPlayer = filterItems.map((item) => {
      if (item.stacks >= 2) {
        const stacksCurrent = player.items.filter((i) => i === item.id).length;
        return { ...item, stacksCurrent: stacksCurrent };
      }
      return item;
    });

    setItemsPlayer(itemsPlayer);
  }, [player, ddragon]);

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
      <Content>
        <Champion player={player} />
        <Runes player={player} runes={ddragon.runes} />
      </Content>
    </Container>
  );
};

export default PlayersContainer;
