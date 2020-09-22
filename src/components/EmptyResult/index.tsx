import React from 'react';

import {Container, EmptyImage, Text} from './styles';

interface EmptyResultProps {
  text: string;
  image: any;
}

const EmptyResult: React.FC<EmptyResultProps> = ({text, image}) => {
  return (
    <Container>
      <EmptyImage source={image} />
      <Text>{text}</Text>
    </Container>
  );
};

export default EmptyResult;
