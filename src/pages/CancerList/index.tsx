import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import AdMob from '../../components/AdMob';

import {Container, Label, Option, Separator, List, View, Card} from './styles';

const cancerList = [
  {label: 'C', options: ['Colón e Reto', 'Colón e Reto']},
  {label: 'M', options: ['Mama']},
  {label: 'P', options: ['Próstata']},
];

const CancerList: React.FC = () => {
  const {navigate} = useNavigation();

  const navigateToDetail = useCallback((cancer: string) => {
    navigate('CancerDetail', {
      cancerName: cancer,
    });
  }, []);
  return (
    <>
      <Container>
        <Header title="Lista de cânceres" />
        <List>
          {cancerList.map((cancer, index) => (
            <View key={index}>
              <Label>{cancer.label}</Label>
              {cancer.options.map((name, index) => (
                <Card key={index} onPress={() => navigateToDetail(name)}>
                  <Option>{name}</Option>
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
