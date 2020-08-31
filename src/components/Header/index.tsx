import React, { useCallback } from 'react';

import { Container, Title, ViewButtons, Button, Icon } from './styles';

import { listIcon, searchIcon, menuIcon } from '../../general/images';
import { useNavigation } from '@react-navigation/native';


const Header: React.FC = () => {

  const { navigate } = useNavigation();

  const navigateToSearch = useCallback(() => {
    navigate('Search')
  }, [navigate])

  return (
    <Container>
      <Title>Lista de cânceres</Title>
      <ViewButtons>
        <Button>
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
