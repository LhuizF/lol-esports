import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface Props {
  player: Player;
  isReverse?: boolean;
}

const Health: React.FC<Props> = ({ player, isReverse }) => {
  const [health, setHealth] = useState<number>(0);

  useEffect(() => {
    const { maxHealth, currentHealth } = player;
    const life = (currentHealth / maxHealth) * 100;
    setHealth(life);
  }, [player]);

  return (
    <Container isReverse={isReverse} currentHealth={health}>
      {player.summonerName} - {player.championId}
      <p title={`${health.toFixed(0)}%`}>
        {player.currentHealth}/{player.maxHealth}
      </p>
      <div>
        <span />
      </div>
    </Container>
  );
};

export default Health;
