import React, {useCallback, useRef} from 'react';

import Menu, {MenuItem} from 'react-native-material-menu';

import {Container, Title, ViewButtons, Button, Icon, Close} from './styles';

import {listIcon, searchIcon, menuIcon, closeIcon} from '../../general/images';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCloseButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, showCloseButton}) => {
  const {navigate, goBack} = useNavigation();
  const menuRef = useRef<Menu>();

  const navigateToSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);

  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  const navigateToSavedResults = useCallback(() => {
    navigate('SavedResults');
  }, [navigate]);

  const navigateToAbout = useCallback(() => {
    menuRef.current?.hide(), navigate('About');
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
        <Menu
          ref={menuRef}
          button={
            <Button onPress={() => menuRef.current?.show()}>
              <Icon source={menuIcon} />
            </Button>
          }>
          <MenuItem onPress={navigateToAbout}>Sobre</MenuItem>
        </Menu>
      </ViewButtons>
    </Container>
  );
};

export default Header;
