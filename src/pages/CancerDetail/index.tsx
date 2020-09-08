import React from 'react';

import {useRoute} from '@react-navigation/native';

import Header from '../../components/Header';
import AdMob from '../../components/AdMob';
import Picker from '../../components/Picker';

import {heartIcon} from '../../general/images';

import {
  Container,
  ViewFields,
  Result,
  ViewTexts,
  Label,
  Stage,
  ButtonSave,
  Icon,
} from './styles';

const options = ['T0', 'T1', 'T2', 'T3', 'T4'];

const CancerDetail: React.FC = () => {
  const {params} = useRoute();
  return (
    <>
      <Container>
        <Header title={params?.cancerName} showCloseButton={true} />
        <ViewFields>
          <Picker title="Tumor Primario" options={options} />
          <Picker title="Linfonodos Regionais" options={options} />
          <Picker title="Metástase" options={options} />
          <Picker title="Nível de PSA" options={options} />
          <Picker title="Grau Histológico" options={options} />
          <Result>
            <ViewTexts>
              <Label>RESULTADO</Label>
              <Stage>Estagio I</Stage>
            </ViewTexts>
            <ButtonSave onPress={() => console.log('salvou')}>
              <Icon source={heartIcon} />
            </ButtonSave>
          </Result>
        </ViewFields>
      </Container>
      <AdMob />
    </>
  );
};

export default CancerDetail;
