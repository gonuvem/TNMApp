import React from 'react';

import AdMob from '../../components/AdMob';
import Header from './components/Header';

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

const SavedResults: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <ViewInformation
          data={listResult}
          keyExtractor={(item) => item.title}
          renderItem={({item}: any) => (
            <Result>
              <Stage>
                <Number>{item.stage}</Number>
              </Stage>
              <InfoResult>
                <Informations>
                  <Name>{item.title}</Name>
                  <Date>{item.date}</Date>
                </Informations>
                <ButtonDelete>
                  <Icon source={trashIcon} />
                </ButtonDelete>
              </InfoResult>
            </Result>
          )}
        />
      </Container>
      <AdMob />
    </>
  );
};

export default SavedResults;
