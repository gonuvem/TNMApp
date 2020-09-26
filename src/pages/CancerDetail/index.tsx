import React, {useState, useRef, useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {ScrollView} from 'react-native';

import Modal from 'react-native-modal';
import {useRoute} from '@react-navigation/native';

import Header from './components/Header';
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
  ModalContent,
  LabelSave,
  NameSave,
  ViewButtons,
  ButtonModal,
  TextButton,
} from './styles';

const CancerDetail: React.FC = () => {
  const {params} = useRoute();

  const {navigate} = useNavigation();
  const scrollRef = useRef<ScrollView>();

  const STORAGE_KEY = 'SAVE_RESULTS';

  const {headers, values, tableObject, inititalValues} = params?.cancerInfo;
  const [openModal, setOpenModal] = useState(false);
  const [headersValue, setHeadersValue] = useState<string[]>();
  const [resultStage, setResultStage] = useState();
  const [labelResult, setLabelResult] = React.useState('');
  const [query, setQuery] = useState<string>();

  const [initValueParam, setInitValueParam] = useState();

  useEffect(() => {
    const deepCopyInitialValues = JSON.parse(JSON.stringify(inititalValues));

    setHeadersValue(deepCopyInitialValues);
  }, [inititalValues]);

  useEffect(() => {
    if (params?.query) {
      const splitedQuery = params.query.split(',');
      setInitValueParam(splitedQuery);
      setHeadersValue(splitedQuery);
      const result = tableObject[params?.query];

      setResultStage(result);
    }
  }, [params, tableObject]);

  const navigateToSavedResults = useCallback(() => {
    navigate('SavedResults');
  }, [navigate]);

  const searchResult = useCallback(() => {
    let newQuery = '';
    for (let i = 0; i < inititalValues.length; i++) {
      if (newQuery === '') {
        newQuery = `${headersValue[i]}`;
      } else {
        newQuery = `${newQuery},${headersValue[i]}`;
      }
    }
    const result = tableObject[newQuery];

    setQuery(newQuery);
    setResultStage(result);

    if (result) {
      setTimeout(() => scrollRef.current?.scrollToEnd({animated: true}), 500);
    }
  }, [headersValue, inititalValues, tableObject]);

  const changeValue = useCallback(
    (index: number, value: string) => {
      const newHeadersValue = headersValue;
      newHeadersValue[index] = value;
      setHeadersValue(newHeadersValue);
      searchResult();
    },
    [headersValue, searchResult],
  );

  const mergeResults = useCallback(
    (results: any) => {
      const result = {
        label: labelResult,
        result: resultStage,
        cancer: params?.cancerName,
        date: new Date(),
        query,
      };

      return results ? [...JSON.parse(results), result] : [result];
    },
    [labelResult, query, resultStage, params],
  );

  const fetchResults = useCallback(async () => {
    try {
      const results = await AsyncStorage.getItem(STORAGE_KEY);

      return results ? results : null;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const saveResult = useCallback(async () => {
    try {
      // await AsyncStorage.removeItem(STORAGE_KEY);
      const saveResults = await fetchResults();
      const newsaveResults = mergeResults(saveResults);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newsaveResults));

      setOpenModal(false);
      setTimeout(() => navigateToSavedResults(), 100);

      console.log('Resultado salvo');
    } catch (error) {
      console.log(error);
    }
  }, [fetchResults, mergeResults, navigateToSavedResults]);

  return (
    <>
      <Container ref={scrollRef}>
        <Header title={params?.cancerName} />
        <ViewFields>
          {headers.map((item: string, index: number) => (
            <Picker
              key={index}
              title={item}
              options={values[index]}
              changeValue={changeValue}
              index={index}
              initialValue={initValueParam ? initValueParam[index] : undefined}
            />
          ))}
          {resultStage ? (
            <Result>
              <ViewTexts>
                <Label>RESULTADO</Label>
                <Stage>Estagio {resultStage}</Stage>
              </ViewTexts>
              <ButtonSave onPress={() => setOpenModal(true)}>
                <Icon source={heartIcon} />
              </ButtonSave>
            </Result>
          ) : undefined}
        </ViewFields>
      </Container>
      <AdMob />
      <Modal
        isVisible={openModal}
        onBackButtonPress={() => setOpenModal(false)}
        onBackdropPress={() => setOpenModal(false)}>
        <ModalContent>
          <LabelSave>Adicione um identificador para o cálculo.</LabelSave>
          <NameSave
            placeholder="Identificador"
            onChangeText={(text) => setLabelResult(text)}
          />
          <ViewButtons>
            <ButtonModal onPress={() => setOpenModal(false)}>
              <TextButton>SAIR</TextButton>
            </ButtonModal>
            <ButtonModal onPress={saveResult}>
              <TextButton>SALVAR</TextButton>
            </ButtonModal>
          </ViewButtons>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CancerDetail;
