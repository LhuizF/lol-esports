import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';

interface Props {
  player: Player;
  runes: RunesDdragon[];
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
    if (!rune) return;
    const subRune = runes.find((rune) => rune.id === player.perkMetadata.subStyleId);
    const { perks } = player.perkMetadata;
    const mainRune = rune.slots[0].runes.find((rune) => rune.id === perks[0]);

    if (!mainRune || !subRune) return;

    setPlayerRunes({
      runes: mainRune,
      subRunes: subRune
    });
  }, [player, runes]);

  return (
    <Container title={playerRunes.runes.name}>
      <Content>
        <img
          alt={playerRunes.runes.icon}
          src={`https://ddragon.leagueoflegends.com/cdn/img/${playerRunes.runes.icon}`}
        />
        <div title={playerRunes.subRunes.name}>
          <img
            alt={playerRunes.subRunes.icon}
            src={`https://ddragon.leagueoflegends.com/cdn/img/${playerRunes.subRunes.icon}`}
          />
        </div>
      </Content>
    </Container>
  );
};

export default Runes;
