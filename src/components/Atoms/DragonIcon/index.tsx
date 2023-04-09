import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import useWindowSize from '../../../hooks/useWindowSize';
import chemtech from '../../../assets/Chemtech_Dragon.webp';
import cloud from '../../../assets/Cloud_Dragon.webp';
import hextech from '../../../assets/Hextech_Dragon.webp';
import infernal from '../../../assets/Infernal_Dragon.webp';
import mountain from '../../../assets/Mountain_Dragon.webp';
import ocean from '../../../assets/Ocean_Dragon.webp';

const dragonsIcons = {
  chemtech: {
    name: 'Quimtec',
    icon: chemtech
  },
  cloud: {
    name: 'Nuvem',
    icon: cloud
  },
  hextech: {
    name: 'Hextech',
    icon: hextech
  },
  infernal: {
    name: 'Infernal',
    icon: infernal
  },
  mountain: {
    name: 'Montanha',
    icon: mountain
  },
  ocean: {
    name: 'Oceano',
    icon: ocean
  }
};

export type Type = keyof typeof dragonsIcons;

interface Props {
  dragon: Type;
}

const DragonIcon: React.FC<Props> = ({ dragon }) => {
  const [mobile, setMobile] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 690) {
      setMobile(true);
      return;
    }
    setMobile(false);
  }, [width]);

  const dragonInfo = dragonsIcons[dragon];

  if (!dragonInfo) return null;

  return (
    <Container title={dragonInfo.name}>
      <img src={dragonInfo.icon.src} alt={dragonInfo.name} />
    </Container>
  );
};

export default DragonIcon;
