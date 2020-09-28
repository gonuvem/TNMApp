import React, {useCallback, useState} from 'react';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import AdMob from '../../components/AdMob';

import {
  Container,
  Label,
  Option,
  Separator,
  List,
  View,
  Card,
  AnimatedCard,
} from './styles';

const breastClinical = require('../../general/cancers/Breast-Clinical');
const breastPathological = require('../../general/cancers/Breast-Pathological');
const colonNRectum = require('../../general/cancers/ColonNRectum');
const prostate = require('../../general/cancers/Prostate');

const cancerList = [
  {label: 'C', options: [{id: 0, name: 'Colón e Reto', info: colonNRectum}]},
  {
    label: 'M',
    options: [
      {id: 1, name: 'Mama Patológico', info: breastPathological},
      {id: 2, name: 'Mama Clínico', info: breastClinical},
    ],
  },
  {label: 'P', options: [{name: 'Próstata', info: prostate}]},
];

const CancerList: React.FC = () => {
  const {navigate} = useNavigation();
  const [scaleValue] = useState(new Animated.Value(0));
  const [selectedOption, setSelectedOption] = useState<number>(-1);

  const navigateToDetail = useCallback(
    (cancer: string, info: any) => {
      Animated.timing(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 500,
      }).start(() => {
        scaleValue.setValue(0);
      });

      navigate('CancerDetail', {
        cancerName: cancer,
        cancerInfo: info,
      });
    },
    [navigate, scaleValue],
  );

  const scaleValueInterpolation = scaleValue.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [1, 20, 50],
  });

  return (
    <>
      <Container>
        <Header title="Lista de cânceres" />
        <List>
          {cancerList.map((cancer, index) => (
            <View key={index}>
              <Label>{cancer.label}</Label>
              {cancer.options.map((item, index2) => (
                <AnimatedCard
                  key={index2}
                  style={
                    selectedOption === item.id
                      ? [
                          {zIndex: 1},
                          {transform: [{scale: scaleValueInterpolation}]},
                        ]
                      : undefined
                  }>
                  <Card
                    onPress={() => {
                      setSelectedOption(item.id);
                      navigateToDetail(item.name, item.info);
                    }}>
                    <Option>{item.name}</Option>
                    <Separator />
                  </Card>
                </AnimatedCard>
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
