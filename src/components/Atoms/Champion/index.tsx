import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Champion, Runes } from './styles';

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

const ChampionContainer: React.FC<Props> = ({ player, runes }) => {
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
    <Container>
      <Champion isDead={player.currentHealth === 0}>
        <Image
          title={`${player.summonerName} - ${player.championId}`}
          src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${player.championId}.png`}
          width={50}
          height={50}
        />
        <p>{player.level}</p>
      </Champion>
      <Runes>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/${playerRunes.runes.icon}`}
          width={40}
          height={40}
        />
        <div>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/${playerRunes.subRunes.icon}`}
          />
        </div>
      </Runes>
    </Container>
  );
};

export default ChampionContainer;
