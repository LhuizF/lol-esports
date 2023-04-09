import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { detailsIcons, colors } from '../../../utils/svg';
import useWindowSize from '../../../hooks/useWindowSize';

export type ColorsType = keyof typeof colors;
export type IconsType = keyof typeof detailsIcons;

interface Props {
  name: IconsType;
  color?: ColorsType;
  size?: number;
  value?: number | string;
}

const DetailsIcon: React.FC<Props> = ({ name, color, size, value }) => {
  const [currentSize, setCurrentSize] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    const newSize = size ? size : 30;
    if (width < 680) {
      setCurrentSize(newSize / 1.8);
      return;
    }
    setCurrentSize(newSize);
  }, [width, size]);

  return (
    <Container>
      <svg
        className="icon"
        width={currentSize}
        height={currentSize}
        viewBox="0 0 24 24"
        xmlns="https://www.w3.org/2000/svg">
        <path
          className="shape"
          fill={color ? colors[color] : '#EFEFEF'}
          d={detailsIcons[name].path}></path>
      </svg>
      <p>{value}</p>
    </Container>
  );
};

export default DetailsIcon;
