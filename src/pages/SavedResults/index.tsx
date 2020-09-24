import React, {useCallback, useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import AdMob from '../../components/AdMob';
import Header from '../../components/Header';
import EmptyResult from '../../components/EmptyResult';

const breastClinical = require('../../general/cancers/Breast-Clinical');
const breastPathological = require('../../general/cancers/Breast-Pathological');
const colonNRectum = require('../../general/cancers/ColonNRectum');
const prostate = require('../../general/cancers/Prostate');

import {trashIcon, doccumentsIcon} from '../../general/images';
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
interface SavedResult {
  label: string;
  result: string;
  cancer: string;
  date: string;
  query: string;
}

const SavedResults: React.FC = () => {
  const {navigate} = useNavigation();
  const [savedResults, setSavedResults] = useState<SavedResult[]>([]);

  useEffect(() => {
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

  const storeNewResults = useCallback(async (newSavedResults) => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newSavedResults));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDeleteResult = useCallback(
    (index: number) => {
      const newSavedResults = JSON.parse(JSON.stringify(savedResults));
      newSavedResults.splice(index, 1);

      console.log(newSavedResults);
      storeNewResults(newSavedResults);
      setSavedResults(newSavedResults);
    },
    [savedResults, storeNewResults],
  );

  const navigateToDetail = useCallback(
    (cancer: string, info: any, query: string, result: string) => {
      navigate('CancerDetail', {
        cancerName: cancer,
        cancerInfo: info,
        query,
        result,
      });
    },
    [navigate],
  );

  return (
    <>
      <Container>
        <Header
          title="Resultados Salvos"
          showCloseButton
          screen="SavedResults"
        />
        {savedResults?.length ? (
          <ViewInformation
            data={savedResults}
            extraData={savedResults}
            keyExtractor={(item: SavedResult) => item.date}
            renderItem={(result: {item: SavedResult; index: number}) => (
              <Result
                onPress={() =>
                  navigateToDetail(
                    result.item?.cancer,
                    cancerList[result.item?.cancer],
                    result.item.query,
                    result.item?.result,
                  )
                }>
                <Stage>
                  <Number>{result.item.result}</Number>
                </Stage>
                <InfoResult>
                  <Informations>
                    <Name>{result.item.label}</Name>
                    <Date>{formatDate(result.item.date)}</Date>
                  </Informations>
                  <ButtonDelete
                    onPress={() => handleDeleteResult(result.index)}>
                    <Icon source={trashIcon} />
                  </ButtonDelete>
                </InfoResult>
              </Result>
            )}
          />
        ) : (
          <EmptyResult
            text="Não encontramos nenhum resultado salvo. Para guardar um cálculo, aperte
          no coração ao lado do resultado. "
            image={doccumentsIcon}
          />
        )}
      </Container>
      <AdMob />
    </>
  );
};

export default SavedResults;
