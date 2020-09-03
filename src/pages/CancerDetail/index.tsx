import React from 'react';

import {useRoute} from '@react-navigation/native';

import Header from '../../components/Header';
import AdMob from '../../components/AdMob';
import Picker from '../../components/Picker';

import {Container, ViewFields} from './styles';

const CancerDetail: React.FC = () => {
  const {params} = useRoute();
  return (
    <>
      <Container>
        <Header title={params?.cancerName} showCloseButton={true} />
        <ViewFields>
          <Picker />
          <Picker />
        </ViewFields>
      </Container>
      <AdMob />
    </>
  );
};

export default CancerDetail;
