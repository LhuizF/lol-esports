import React, { useEffect, useState } from 'react';
import DetailsIcon from '../../Atoms/DetailsIcon';
import { Container, Content, Text, DragonsContainer, Detail } from './styles';
import { SetGold } from '../../../utils';
import DragonIcon from '../../Atoms/DragonIcon';

interface Props {
  frame: Frame;
}

const initialTeamFrame: TeamFrame = {
  barons: 0,
  dragons: [],
  inhibitors: 0,
  participants: [],
  totalGold: 0,
  totalKills: 0,
  towers: 0
};

const Scoreboard: React.FC<Props> = ({ frame }) => {
  const [blueTeam, setBlueTeam] = useState<TeamFrame>(initialTeamFrame);
  const [redTeam, setRedTeam] = useState<TeamFrame>(initialTeamFrame);
  const [blueGold, setBlueGold] = useState<number>(0);
  const [redGold, setRedGold] = useState<number>(0);

  useEffect(() => {
    if (!frame) return;
    setBlueTeam(frame.blueTeam);
    setRedTeam(frame.redTeam);

    SetGold(blueGold, blueTeam.totalGold, setBlueGold);
    SetGold(redGold, redTeam.totalGold, setRedGold);
  }, [frame]);

  return (
    <Container>
      <Content>
        <Detail>
          <DetailsIcon name="inhibitor" color="blue" value={blueTeam.inhibitors} />
          <DetailsIcon name="baron" color="blue" value={blueTeam.barons} />
          <DetailsIcon name="towers" color="blue" value={blueTeam.towers} />
          <DetailsIcon
            name="coins"
            color="blue"
            value={blueGold.toLocaleString('pt-BR')}
          />
        </Detail>
      </Content>

      <Text>
        <DragonsContainer>
          <p>{blueTeam.totalKills}</p>
          <div>
            {blueTeam.dragons.map((dragon, index) => (
              <DragonIcon dragon={dragon} key={index} />
            ))}
          </div>
        </DragonsContainer>
        <DetailsIcon name="kills" size={50} />
        <DragonsContainer isRevised>
          <p>{redTeam.totalKills}</p>
          <div>
            {redTeam.dragons.map((dragon, index) => (
              <DragonIcon dragon={dragon} key={index} />
            ))}
          </div>
        </DragonsContainer>
      </Text>

      <Content>
        <Detail>
          <DetailsIcon name="coins" color="red" value={redGold.toLocaleString('pt-BR')} />
          <DetailsIcon name="towers" color="red" value={redTeam.towers} />
          <DetailsIcon name="baron" color="red" value={redTeam.barons} />
          <DetailsIcon name="inhibitor" color="red" value={redTeam.inhibitors} />
        </Detail>
      </Content>
    </Container>
  );
};

export default Scoreboard;
