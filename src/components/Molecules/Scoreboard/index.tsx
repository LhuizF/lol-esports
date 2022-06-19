import React from 'react';
import { Container } from './styles';

interface Props {
  redTeam: TeamFrame;
  blueTeam: TeamFrame;
}

const Scoreboard: React.FC<Props> = ({ blueTeam, redTeam }) => {
  return <Container></Container>;
};

export default Scoreboard;
