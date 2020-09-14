import React, {useCallback, useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import AdMob from '../../components/AdMob';
import Header from './components/Header';
import EmptyResult from '../../components/EmptyResult';

import {trashIcon} from '../../general/images';

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

const listResult = [
  {
    title: 'Jorge da Silva Oliveira - Colón...',
    date: '21/08/2020',
    stage: 'IVA',
  },
  {title: 'Mama (Alessandra)', date: '19/08/2020', stage: 'IV'},
  {title: 'Prostáta', date: '17/08/2020', stage: 'I'},
];

// const listResult = null

const SavedResults: React.FC = () => {
  const [savedResults, setSavedResults] = useState();

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
  return (
    <>
      <Container>
        <Header />
        {savedResults ? (
          <ViewInformation
            data={savedResults}
            keyExtractor={(item) => item.date}
            renderItem={({item}: any) => (
              <Result>
                <Stage>
                  <Number>{item.result}</Number>
                </Stage>
                {console.log(item.date)}
                <InfoResult>
                  <Informations>
                    <Name>{item.label}</Name>
                    <Date>{item.date}</Date>
                  </Informations>
                  <ButtonDelete>
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
