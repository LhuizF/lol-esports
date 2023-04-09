import React from 'react';
import { TextContainer } from './styles';

const MainText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <TextContainer>
      <p>{text}</p>
    </TextContainer>
  );
};

export default MainText;
