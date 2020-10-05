import React, {useCallback, useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import AdMob from '../../components/AdMob';
import Header from '../../components/Header';
import EmptyResult from '../../components/EmptyResult';
import SavedItem from './components/SavedItem';

import {doccumentsIcon} from '../../general/images';

const STORAGE_KEY = 'SAVE_RESULTS';

import {Container, ViewInformation} from './styles';

interface SavedResult {
  label: string;
  result: string;
  cancer: string;
  date: string;
  query: string;
}

const SavedResults: React.FC = () => {
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
              <SavedItem result={result} handleDelete={handleDeleteResult} />
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
