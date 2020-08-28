import React, {useCallback} from 'react';

import AdMob from '../../components/AdMob';

import {arrowLeft, searchIcon, searchListIcon} from '../../general/images';

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
} from './styles';
import {useNavigation} from '@react-navigation/native';

const Search: React.FC = () => {
  const {navigation} = useNavigation();
  const back = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <>
      <Container>
        <Header>
          <Back onPress={back}>
            <ArrowIcon source={arrowLeft} />
          </Back>
          <SearchField>
            <SearchIcon source={searchIcon} />
            <TextField placeholder="Pesquisar" />
          </SearchField>
        </Header>
        <SearchResult>
          <InitialMessage>
            <SearchList source={searchListIcon} />
            <SearchMessage>
              Pesquise pelo nome do cancêr que você está procurando
            </SearchMessage>
          </InitialMessage>
        </SearchResult>
      </Container>
      <AdMob />
    </>
  );
};

export default Search;
