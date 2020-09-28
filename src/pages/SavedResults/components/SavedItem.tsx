import React, {useRef, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, PanResponder} from 'react-native';

import {trashIcon} from '../../../general/images';
import {formatDate} from '../../../general/utils';

const breastClinical = require('../../../general/cancers/Breast-Clinical');
const breastPathological = require('../../../general/cancers/Breast-Pathological');
const colonNRectum = require('../../../general/cancers/ColonNRectum');
const prostate = require('../../../general/cancers/Prostate');

const cancerList = {
  'Colón e Reto': colonNRectum,
  'Mama Patológico': breastPathological,
  'Mama Clínico': breastClinical,
  Próstata: prostate,
};

import {
  Icon,
  Result,
  Stage,
  Number,
  InfoResult,
  Informations,
  Name,
  Date,
  ButtonDelete,
} from './styles';

interface SavedItem {
  result: {
    item: SavedResult;
    index: number;
  };
  handleDelete: Function;
}

interface SavedResult {
  label: string;
  result: string;
  cancer: string;
  date: string;
  query: string;
}

const SavedItem: React.FC<SavedItem> = ({result, handleDelete}) => {
  const {navigate} = useNavigation();

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderMove: Animated.event([null, {dx: pan.x}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        if (pan.x._value < -200) {
          handleDelete(result.index);
        }
        Animated.spring(pan.x, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderTerminate: () => {
        Animated.spring(pan.x, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  const navigateToDetail = useCallback(() => {
    navigate('CancerDetail', {
      cancerName: result.item?.cancer,
      cancerInfo: cancerList[result.item?.cancer],
      query: result.item.query,
      result: result.item?.result,
    });
  }, [navigate, result]);

  return (
    <Animated.View
      style={{
        transform: [{translateX: pan.x}],
      }}
      {...panResponder.panHandlers}>
      <Result onPress={navigateToDetail}>
        <Stage>
          <Number>{result.item.result}</Number>
        </Stage>
        <InfoResult>
          <Informations>
            <Name>{result.item.label}</Name>
            <Date>{formatDate(result.item.date)}</Date>
          </Informations>
          <ButtonDelete onPress={() => handleDelete(result.index)}>
            <Icon source={trashIcon} />
          </ButtonDelete>
        </InfoResult>
      </Result>
    </Animated.View>
  );
};

export default SavedItem;
