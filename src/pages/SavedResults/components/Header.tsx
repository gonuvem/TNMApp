import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import {arrowLeft, menuIcon, searchIcon} from '../../../general/images';

import {
  Container,
  Back,
  ArrowIcon,
  Title,
  Button,
  ViewButtons,
  Icon,
} from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const {goBack, navigate} = useNavigation();
  const back = useCallback(() => {
    goBack();
  }, [goBack]);
  const navigateToSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);
  return (
    <Container>
      <ViewButtons>
        <Back onPress={back}>
          <ArrowIcon source={arrowLeft} />
        </Back>
        <Title>{title}</Title>
      </ViewButtons>
      <ViewButtons>
        <Button onPress={navigateToSearch}>
          <Icon source={searchIcon} />
        </Button>
        <Button>
          <Icon source={menuIcon} />
        </Button>
      </ViewButtons>
    </Container>
  );
};

export default Header;
