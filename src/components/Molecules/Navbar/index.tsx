import React from 'react';
import Logo from '../../Atoms/Logo';
import { Container } from './styles';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';

interface Props {
  league: League;
}

const ChampionsTable: React.FC<Props> = ({ league }) => {
  return (
    <Container>
      <Link href="/">
        <IoIosArrowBack size={40} />
      </Link>
      {league && <Logo image={league.image} name={league.name} size={50} />}
    </Container>
  );
};

export default ChampionsTable;
