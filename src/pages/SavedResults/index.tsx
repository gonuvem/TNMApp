import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import AdMob from '../../components/AdMob';

import {arrowLeft, menuIcon, searchIcon, trashIcon} from '../../general/images';

import {
  Container,
  Header,
  Back,
  ArrowIcon,
  Title,
  Button,
  Icon,
  ViewButtons,
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

const SavedResults: React.FC = () => {
  const {goBack, navigate} = useNavigation();
  const back = useCallback(() => {
    goBack();
  }, [goBack]);
  const navigateToSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);
  return (
    <>
      <Container>
        <Header>
          <ViewButtons>
            <Back onPress={back}>
              <ArrowIcon source={arrowLeft} />
            </Back>
            <Title>Resultados Salvos</Title>
          </ViewButtons>
          <ViewButtons>
            <Button onPress={navigateToSearch}>
              <Icon source={searchIcon} />
            </Button>
            <Button>
              <Icon source={menuIcon} />
            </Button>
          </ViewButtons>
        </Header>
        <ViewInformation>
          <Result>
            <Stage>
              <Number>I</Number>
            </Stage>
            <InfoResult>
              <Informations>
                <Name>Jorge da Silva Oliveira - Colón...</Name>
                <Date>21/08/2020</Date>
              </Informations>
              <ButtonDelete>
                <Icon source={trashIcon} />
              </ButtonDelete>
            </InfoResult>
          </Result>
        </ViewInformation>
      </Container>
      <AdMob />
    </>
  );
};

export default SavedResults;
