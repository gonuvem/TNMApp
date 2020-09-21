import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import AdMob from '../../components/AdMob';
import EmptyResult from '../../components/EmptyResult';

import {
  arrowLeft,
  searchIcon,
  searchListIcon,
  searchNotFound,
} from '../../general/images';

import {
  Container,
  Header,
  Back,
  ArrowIcon,
  SearchField,
  SearchIcon,
  TextField,
  SearchResult,
  SearchList,
  SearchMessage,
  InitialMessage,
  View,
  Card,
  Option,
  Separator,
  ListResult,
  Label,
} from './styles';

const breastClinical = require('../../general/cancers/Breast-Clinical');
const breastPathological = require('../../general/cancers/Breast-Pathological');
const colonNRectum = require('../../general/cancers/ColonNRectum');
const prostate = require('../../general/cancers/Prostate');

const cancerList = [
  {name: 'Colón e Reto', info: colonNRectum},
  {name: 'Mama Patológico', info: breastPathological},
  {name: 'Mama Clínico', info: breastClinical},
  {name: 'Próstata', info: prostate},
];

interface Result {
  name: string;
  info: any;
}

const Search: React.FC = () => {
  const navigation = useNavigation();
  const [result, setResult] = useState<Result[] | null>();
  const back = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const navigateToDetail = useCallback(
    (cancer: string, info: any) => {
      navigation.navigate('CancerDetail', {
        cancerName: cancer,
        cancerInfo: info,
      });
    },
    [navigation],
  );

  const handleSearch = useCallback((text: string) => {
    const searchResult = cancerList.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setResult(text ? searchResult : null);
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Back onPress={back}>
            <ArrowIcon source={arrowLeft} />
          </Back>
          <SearchField>
            <SearchIcon source={searchIcon} />
            <TextField placeholder="Pesquisar" onChangeText={handleSearch} />
          </SearchField>
        </Header>
        {result ? (
          result?.length === 0 ? (
            <EmptyResult
              text="Não encontramos nada para esta pesquisa. Tente novamente "
              image={searchNotFound}
            />
          ) : (
            <ListResult
              data={result}
              keyExtractor={(item) => item.name}
              renderItem={({item, index}) => (
                <View>
                  <Label>{item.name.slice(0, 1)}</Label>
                  <Card
                    key={index}
                    onPress={() => navigateToDetail(item.name, item.info)}>
                    <Option>{item.name}</Option>
                    <Separator />
                  </Card>
                </View>
              )}
            />
          )
        ) : (
          <SearchResult>
            <InitialMessage>
              <SearchList source={searchListIcon} />
              <SearchMessage>
                Pesquise pelo nome do cancêr que você está procurando
              </SearchMessage>
            </InitialMessage>
          </SearchResult>
        )}
      </Container>
      <AdMob />
    </>
  );
};

export default Search;
