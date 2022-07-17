import React from 'react';
import { Container, Item, Content, ButtonContainer, GoldContainer } from './styles';
import { IoIosArrowDown } from 'react-icons/io';

import Champion from '../../Atoms/Champion';
import Runes from '../../Atoms/Runes';
import Items from '../../Atoms/Items';
import Health from '../../Atoms/Health';

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

      <Content flex={1} minWidth={255}>
        <Health player={player} isReverse={isReverse} />
        <Items player={player} ddragon={ddragon} isReverse={isReverse} />
      </Content>

      <Content>
        <Item isReverse={isReverse}>
          <div title="KDA">
            <p>K</p>
            <p>D</p>
            <p>A</p>
          </div>
          <div>
            <span>{player.kills}</span>
            <span>{player.deaths}</span>
            <span>{player.assists}</span>
          </div>
        </Item>
      </Content>

      <Content>
        <Item>
          <p>CS</p>
          <span>{player.creepScore}</span>
        </Item>
      </Content>

      <Content>
        <GoldContainer isPositive={player.goldGap > 0}>
          <p>Ouro</p>
          <span title="Ouro total">{player.totalGold}</span>
          <span title="Diferença de ouro">{player.goldGap}</span>
        </GoldContainer>
      </Content>

      {/* <ButtonContainer>
        <button>
          <IoIosArrowDown size={30} />
        </button>
      </ButtonContainer> */}
    </Container>
  );
};

export default PlayersContainer;
