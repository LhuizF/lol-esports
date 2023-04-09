import React, { useEffect, useState } from 'react';

import { Container, Item, Trinket } from './styles';

interface Props {
  player: Player;
  isReverse?: boolean;
  items: ItemsDdragon;
}

const Items: React.FC<Props> = ({ player, isReverse, items }) => {
  const [itemsPlayer, setItemsPlayer] = useState<PlayerItem[]>([]);

  const version = localStorage.getItem('version');

  const limitItens = (array: PlayerItem[]): void => {
    if (array.length > 7) {
      array.splice(1, 1);
      return limitItens(array);
    }
  };

  useEffect(() => {
    const itensWithId = player.items
      .map((i) => ({ ...items[i], id: i }))
      .sort((a, b) => a.gold.total - b.gold.total);

    limitItens(itensWithId);

    const itemsStacks = new Map<number, PlayerItem>();

    const itemsPlayer = itensWithId.filter((item) => {
      if (item.stacks && item.stacks >= 2) {
        const stacksCurrent = player.items.filter((i) => i === item.id).length;
        itemsStacks.set(item.id, { ...item, stacksCurrent: stacksCurrent });
        return;
      }
      return item;
    });

    setItemsPlayer([...itemsStacks.values(), ...itemsPlayer]);
  }, [player, items]);

  return (
    <Container isReverse={isReverse}>
      {itemsPlayer.map((item, index) =>
        !item.tags.includes('Trinket') ? (
          <Item key={index} title={item.name}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.id}.png`}
            />
            <p>{item.stacksCurrent && item.stacksCurrent > 1 && item.stacksCurrent}</p>
          </Item>
        ) : (
          <Trinket isReverse={isReverse} key={index} title={item.name}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.id}.png`}
            />
          </Trinket>
        )
      )}
    </Container>
  );
};

export default Items;
