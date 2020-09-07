import React from 'react';

import {doccumentsIcon} from '../../general/images';

import {Container, EmptyImage, Text} from './styles';

const EmptyResult: React.FC = () => {
  return (
    <Container>
      <EmptyImage source={doccumentsIcon} />
      <Text>
        Não encontramos nenhum resultado salvo. Para guardar um cálculo, aperte
        no coração ao lado do resultado.
      </Text>
    </Container>
  );
};

export default EmptyResult;
