import React from 'react';
import { Container, CS, KDA, Item, Trinket, Content } from './styles';
import Champion from '../../Atoms/Champion';
import Runes from '../../Atoms/Runes';
import Items from '../../Atoms/Items';

interface Props {
  player: Player;
  isReverse?: boolean;
  ddragon: Ddragon;
}

const PlayersContainer: React.FC<Props> = ({ player, isReverse, ddragon }) => {
  return (
    <Container isReverse={isReverse}>
      <Content>
        <Champion player={player} />
        <Runes player={player} runes={ddragon.runes} />
      </Content>

      <Content flex={1}>
        <Items player={player} ddragon={ddragon} isReverse={isReverse} />
      </Content>

      {/* <KDA>
        <span>{player.kills}</span>
        <span>{player.deaths}</span>
        <span>{player.assists}</span>
      </KDA>
      <CS>{player.creepScore}</CS> */}
    </Container>
  );
};

export default PlayersContainer;
