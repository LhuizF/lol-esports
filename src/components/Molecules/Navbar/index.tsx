import React from 'react';
import Logo from '../../Atoms/Logo';
import { Container } from './styles';
import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  league: League;
}

const Navbar: React.FC<Props> = ({ league }) => {
  return (
    <Container>
      <a href="/">
        <IoIosArrowBack size={40} />
      </a>
      <div>
        {league && <Logo image={league.image} name={league.name} height={80} />}
      </div>
    </Container>
  );
};

export default Navbar;
