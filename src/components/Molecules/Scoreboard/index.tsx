import React, { useEffect, useState } from 'react';
import DetailsIcon from '../../Atoms/DetailsIcon';
import { Container, Content, Text } from './styles';

interface Props {
  redTeam: TeamFrame;
  blueTeam: TeamFrame;
}

const Scoreboard: React.FC<Props> = ({ blueTeam, redTeam }) => {
  const [redGold, setRedGold] = useState<number>(0);
  const [blueGold, setBlueGold] = useState<number>(0);

  useEffect(() => {
    SetGold(blueGold, blueTeam.totalGold, setBlueGold);
  }, [blueTeam, redTeam]);

  const SetGold = (gold: number, newGold: number, setNewGold: any): void => {
    while (gold < newGold) {
      gold += 1;
      setNewGold(gold);
    }
  };

  return (
    <Container>
      <Content>
        <DetailsIcon name="inhibitor" color="blue" value={redTeam.inhibitors} />
        <DetailsIcon name="baron" color="blue" value={blueTeam.barons} />
        <DetailsIcon name="towers" color="blue" value={blueTeam.towers} />
        <DetailsIcon
          name="coins"
          color="blue"
          value={+blueTeam.totalGold.toLocaleString('pt-BR')}
        />
      </Content>

      <Text>
        <div>
          <p>{blueTeam.totalKills}</p>
          <DetailsIcon name="kills" size={50} />
          <p>{redTeam.totalKills}</p>
        </div>
      </Text>

      <Content>
        <DetailsIcon
          name="coins"
          color="red"
          value={+redTeam.totalGold.toLocaleString('pt-BR')}
        />
        <DetailsIcon name="towers" color="red" value={redTeam.towers} />
        <DetailsIcon name="baron" color="red" value={redTeam.barons} />
        <DetailsIcon name="inhibitor" color="red" value={redTeam.inhibitors} />
      </Content>
    </Container>
  );
};

export default Scoreboard;
