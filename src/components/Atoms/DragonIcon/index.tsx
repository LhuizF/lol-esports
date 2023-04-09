import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import useWindowSize from '../../../hooks/useWindowSize';
import chemtech from '../../../assets/images/Chemtech_Dragon.webp';
import cloud from '../../../assets/images/Cloud_Dragon.webp';
import hextech from '../../../assets/images/Hextech_Dragon.webp';
import infernal from '../../../assets/images/Infernal_Dragon.webp';
import mountain from '../../../assets/images/Mountain_Dragon.webp';
import ocean from '../../../assets/images/Ocean_Dragon.webp';

import chemtchSVG from '../../../assets/svg/chemtech-dragon.svg';
import cloudSVG from '../../../assets/svg/cloud-dragon.svg';
import elderSVG from '../../../assets/svg/elder-dragon.svg';
import hextechSVG from '../../../assets/svg/hextech-dragon.svg';
import infernalSVG from '../../../assets/svg/infernal-dragon.svg';
import mountainSVG from '../../../assets/svg/mountain-dragon.svg';
import oceanSVG from '../../../assets/svg/ocean-dragon.svg';

const dragonsIcons = {
  chemtech: {
    name: 'Quimtec',
    icon: chemtech,
    svg: chemtchSVG
  },
  cloud: {
    name: 'Nuvem',
    icon: cloud,
    svg: cloudSVG
  },
  hextech: {
    name: 'Hextech',
    icon: hextech,
    svg: hextechSVG
  },
  infernal: {
    name: 'Infernal',
    icon: infernal,
    svg: infernalSVG
  },
  mountain: {
    name: 'Montanha',
    icon: mountain,
    svg: mountainSVG
  },
  ocean: {
    name: 'Oceano',
    icon: ocean,
    svg: oceanSVG
  },
  elder: {
    name: 'Ancião',
    icon: '',
    svg: elderSVG
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
      <img src={dragonInfo.svg} alt={dragonInfo.name} />
    </Container>
  );
};

export default DragonIcon;
