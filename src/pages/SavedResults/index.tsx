import React, {useCallback, useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import AdMob from '../../components/AdMob';
import Header from './components/Header';
import EmptyResult from '../../components/EmptyResult';

const breastClinical = require('../../general/cancers/Breast-Clinical');
const breastPathological = require('../../general/cancers/Breast-Pathological');
const colonNRectum = require('../../general/cancers/ColonNRectum');
const prostate = require('../../general/cancers/Prostate');

import {trashIcon} from '../../general/images';
import {formatDate} from '../../general/utils';

const STORAGE_KEY = 'SAVE_RESULTS';

import {
  Container,
  Icon,
  Result,
  Stage,
  Number,
  InfoResult,
  Informations,
  Name,
  Date,
  ButtonDelete,
  ViewInformation,
} from './styles';

const cancerList = {
  'Colón e Reto': colonNRectum,
  'Mama Patológico': breastPathological,
  'Mama Clínico': breastClinical,
  Próstata: prostate,
};

const SavedResults: React.FC = () => {
  const {navigate} = useNavigation();
  const [savedResults, setSavedResults] = useState([]);

  useEffect(() => {
    const STORAGE_KEY = 'SAVE_RESULTS';

    async function getResults() {
      try {
        const results = await AsyncStorage.getItem(STORAGE_KEY);

        const parserResults = results ? JSON.parse(results) : null;

        setSavedResults(parserResults);
      } catch (error) {
        console.log(error);
      }
    }

    getResults();
  }, []);

  const handleDeleteResult = useCallback(
    (index: number) => {
      const newSavedResults = savedResults;
      newSavedResults.splice(index, 1);

      console.log(newSavedResults);
      storeNewResults(newSavedResults);
    },
    [savedResults],
  );

  const storeNewResults = useCallback(async (newSavedResults) => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newSavedResults));

      setSavedResults(newSavedResults);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const navigateToDetail = useCallback(
    (cancer: string, info: any, query: string, result: string) => {
      navigate('CancerDetail', {
        cancerName: cancer,
        cancerInfo: info,
        query,
        result,
      });
    },
    [],
  );

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <Result
          onPress={() =>
            navigateToDetail(
              item?.cancer,
              cancerList[item?.cancer],
              item.query,
              item?.result,
            )
          }>
          <Stage>
            <Number>{item.result}</Number>
          </Stage>
          <InfoResult>
            <Informations>
              <Name>{item.label}</Name>
              <Date>{formatDate(item.date)}</Date>
            </Informations>
            <ButtonDelete onPress={() => handleDeleteResult(index)}>
              <Icon source={trashIcon} />
            </ButtonDelete>
          </InfoResult>
        </Result>
      );
    },
    [savedResults],
  );

  return (
    <>
      <Container>
        <Header />
        {savedResults.length ? (
          <ViewInformation
            data={savedResults}
            extraData={savedResults}
            keyExtractor={(item) => item.date}
            // renderItem={renderItem}
            renderItem={({item, index}) => (
              <Result
                onPress={() =>
                  navigateToDetail(
                    item?.cancer,
                    cancerList[item?.cancer],
                    item.query,
                    item?.result,
                  )
                }>
                <Stage>
                  <Number>{item.result}</Number>
                </Stage>
                <InfoResult>
                  <Informations>
                    <Name>{item.label}</Name>
                    <Date>{formatDate(item.date)}</Date>
                  </Informations>
                  <ButtonDelete onPress={() => handleDeleteResult(index)}>
                    <Icon source={trashIcon} />
                  </ButtonDelete>
                </InfoResult>
              </Result>
            )}
          />
        ) : (
          <EmptyResult />
        )}
      </Container>
      <AdMob />
    </>
  );
};

export default SavedResults;
