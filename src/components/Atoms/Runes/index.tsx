import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from './styles';

interface Props {
  player: Player;
  runes: any;
}

const initialRunes: PlayerRunes = {
  runes: {
    icon: '',
    name: '',
    id: 0,
    key: '',
    longDesc: '',
    shortDesc: ''
  },
  subRunes: {
    icon: '',
    name: '',
    id: 0,
    key: '',
    slots: []
  }
};

const Runes: React.FC<Props> = ({ player, runes }) => {
  const [playerRunes, setPlayerRunes] = useState<PlayerRunes>(initialRunes);

  useEffect(() => {
    const rune = runes.find((rune) => rune.id === player.perkMetadata.styleId);
    const subRune = runes.find((rune) => rune.id === player.perkMetadata.subStyleId);
    const { perks } = player.perkMetadata;
    const mainRune = rune.slots[0].runes.find((rune) => rune.id === perks[0]);

    setPlayerRunes({
      runes: mainRune,
      subRunes: subRune
    });
  }, [player, runes]);

  return (
    <Container title={playerRunes.runes.name}>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/${playerRunes.runes.icon}`}
        width={40}
        height={40}
      />
      <div title={playerRunes.subRunes.name}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/${playerRunes.subRunes.icon}`}
        />
      </div>
    </Container>
  );
};

export default Runes;
