import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import AdMob from '../../components/AdMob';

import {Container, Label, Option, Separator, List, View, Card} from './styles';

const breastClinical = require('../../general/cancers/Breast-Clinical');
const breastPathological = require('../../general/cancers/Breast-Pathological');
const colonNRectum = require('../../general/cancers/ColonNRectum');
const prostate = require('../../general/cancers/Prostate');

const cancerList = [
  {label: 'C', options: [{name: 'Colón e Reto', info: colonNRectum}]},
  {
    label: 'M',
    options: [
      {name: 'Mama Patológico', info: breastPathological},
      {name: 'Mama Clínico', info: breastClinical},
    ],
  },
  {label: 'P', options: [{name: 'Próstata', info: prostate}]},
];

const CancerList: React.FC = () => {
  const {navigate} = useNavigation();

  const navigateToDetail = useCallback(
    (cancer: string, info: any) => {
      navigate('CancerDetail', {
        cancerName: cancer,
        cancerInfo: info,
      });
    },
    [navigate],
  );
  return (
    <>
      <Container>
        <Header title="Lista de cânceres" />
        <List>
          {cancerList.map((cancer, index) => (
            <View key={index}>
              <Label>{cancer.label}</Label>
              {cancer.options.map((item, index2) => (
                <Card
                  key={index2}
                  onPress={() => navigateToDetail(item.name, item.info)}>
                  <Option>{item.name}</Option>
                  <Separator />
                </Card>
              ))}
            </View>
          ))}
        </List>
      </Container>
      <AdMob />
    </>
  );
};

export default CancerList;
