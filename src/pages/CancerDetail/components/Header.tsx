import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  closeIcon,
  menuIcon,
  searchIcon,
  listIcon,
} from '../../../general/images';

import {
  Container,
  Back,
  CloseIcon,
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

  const navigateToSavedResults = useCallback(() => {
    navigate('SavedResults');
  }, [navigate]);

  return (
    <Container>
      <ViewButtons>
        <Back onPress={back}>
          <CloseIcon source={closeIcon} />
        </Back>
        <Title>{title}</Title>
      </ViewButtons>
      <ViewButtons>
        <Button onPress={navigateToSavedResults}>
          <Icon source={listIcon} />
        </Button>
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
