import React, {useState, useEffect, useCallback} from 'react';

import Modal from 'react-native-modal';
import {useRoute} from '@react-navigation/native';

import Header from '../../components/Header';
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

  const {headers, values, tableObject,inititalValues} = params?.cancerInfo;
  const [openModal, setOpenModal] = useState(false);
  const [headersValue, setHeadersValue] = useState(inititalValues);
  const [resultStage, setResultStage] = useState();

  const changeValue = useCallback((index: number, value: string) => {
    const newHeadersValue = headersValue;
    newHeadersValue.[index] = value

    setHeadersValue(newHeadersValue)

    searchResult()
  }, []);

  const searchResult = useCallback(() => {
    let query = ""
    for(let i = 0;i < headersValue.length;i++ ){
      if(query === ''){
        query = `${headersValue[i]}`
      }else{
      query = `${query},${headersValue[i]}`
      }
    }

    const result = tableObject[query];

    if(result){
      setResultStage(result);
    }
  },[headersValue])

  return (
    <>
      <Container>
        <Header title={params?.cancerName} showCloseButton={true} />
        <ViewFields>
          {headers.map((item: string, index: number) => (
            <Picker
              key={index}
              title={item}
              options={values[index]}
              changeValue={changeValue}
              index={index}
            />
          ))}
          { resultStage ?
          <Result>
            <ViewTexts>
              <Label>RESULTADO</Label>
              <Stage>Estagio {resultStage}</Stage>
            </ViewTexts>
            <ButtonSave onPress={() => setOpenModal(true)}>
              <Icon source={heartIcon} />
            </ButtonSave>
          </Result>
          : undefined
          }
        </ViewFields>
      </Container>
      <AdMob />
      <Modal
        isVisible={openModal}
        onBackButtonPress={() => setOpenModal(false)}
        onBackdropPress={() => setOpenModal(false)}>
        <ModalContent>
          <LabelSave>Adicione um identificador para o cálculo.</LabelSave>
          <NameSave placeholder="Identificador" />
          <ViewButtons>
            <ButtonModal onPress={() => setOpenModal(false)}>
              <TextButton>SAIR</TextButton>
            </ButtonModal>
            <ButtonModal>
              <TextButton>SALVAR</TextButton>
            </ButtonModal>
          </ViewButtons>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CancerDetail;
