import React, {useCallback} from 'react';

import {Container, Title, ViewButtons, Button, Icon, Close} from './styles';

import {listIcon, searchIcon, menuIcon, closeIcon} from '../../general/images';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCloseButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, showCloseButton}) => {
  const {navigate, goBack} = useNavigation();

  const navigateToSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);

  const back = useCallback(() => {
    goBack();
  }, [goBack]);
  const navigateToSavedResults = useCallback(() => {
    navigate('SavedResults');
  }, [navigate]);

  return (
    <Container>
      <ViewButtons>
        {showCloseButton ? (
          <Button onPress={back}>
            <Close source={closeIcon} />
          </Button>
        ) : undefined}
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
