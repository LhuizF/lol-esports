import React from 'react';
import { Container } from './styles';
import { detailsIcons, colors } from '../../../utils/svg';

export type ColorsType = keyof typeof colors;
export type IconsType = keyof typeof detailsIcons;

interface Props {
  name: IconsType;
  color?: ColorsType;
  size?: number;
  value?: number | string;
}

const DetailsIcon: React.FC<Props> = ({ name, color, size, value }) => {
  return (
    <Container>
      <svg
        className="icon"
        width={size ? size : 30}
        height={size ? size : 30}
        viewBox="0 0 24 24"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          className="shape"
          fill={color ? colors[color] : '#EFEFEF'}
          d={detailsIcons[name].path}
        ></path>
      </svg>
      <p>{value}</p>
    </Container>
  );
};

export default DetailsIcon;
