import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { dragonsIcons as icons } from '../../../utils/svg';
import useWindowSize from '../../../hooks/useWindowSize';

export type Type = keyof typeof icons;

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

  return (
    // <Container title={icons[dragon].name}>
    //   <svg
    //     className="icon"
    //     width={mobile ? 15 : 30}
    //     height={mobile ? 15 : 30}
    //     viewBox="0 0 24 24"
    //     xmlns="https://www.w3.org/2000/svg"
    //   >
    //     <path className="shape" fill={icons[dragon].color} d={icons[dragon].path}></path>
    //   </svg>
    // </Container>
    <div>o</div>
  );
};

export default DragonIcon;
