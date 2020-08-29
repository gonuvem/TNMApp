import React from 'react';

import Header from '../../components/Header';
import AdMob from '../../components/AdMob';

import {Container, Label, Option, Separator, List, View} from './styles';

const cancerList = [
  {label: 'C', options: ['Colón e Reto', 'Colón e Reto']},
  {label: 'M', options: ['Mama']},
  {label: 'P', options: ['Próstata']},
];

const CancerList: React.FC = (navigation) => {
  return (
    <>
      <Container>
        <Header />
        <List>
          {cancerList.map((cancer, index) => (
            <View key={index}>
              <Label>{cancer.label}</Label>
              {cancer.options.map((name, index) => (
                <View key={index}>
                  <Option>{name}</Option>
                  <Separator />
                </View>
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
