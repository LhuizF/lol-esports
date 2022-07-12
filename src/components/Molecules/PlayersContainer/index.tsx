import React from 'react';
import { Container, Item, Content, ButtonContainer } from './styles';
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

      <Content flex={1} minWidth={320}>
        <Health player={player} isReverse={isReverse} />
        <Items player={player} ddragon={ddragon} isReverse={isReverse} />
      </Content>

      <Content>
        <Item isReverse={isReverse}>
          <div title="KDA">
            <span>K</span>
            <span>D</span>
            <span>A</span>
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
          {player.creepScore}
        </Item>
      </Content>

      <Content>
        <Item title="Ouro total">
          <p>Ouro</p>
          {player.totalGold}
        </Item>
      </Content>

      <ButtonContainer>
        <button>
          <IoIosArrowDown size={30} />
        </button>
      </ButtonContainer>
    </Container>
  );
};

export default PlayersContainer;
