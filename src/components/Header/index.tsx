import React, {useCallback, useRef} from 'react';

import Menu, {MenuItem} from 'react-native-material-menu';

import {Container, Title, ViewButtons, Button, Icon, ArrowIcon} from './styles';

import {listIcon, searchIcon, menuIcon, arrowLeft} from '../../general/images';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCloseButton?: boolean;
  screen?: string;
}

const Header: React.FC<HeaderProps> = ({title, showCloseButton, screen}) => {
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
    menuRef.current?.hide();
    navigate('About');
  }, [navigate]);

  return (
    <Container>
      <ViewButtons>
        {showCloseButton ? (
          <Button onPress={back}>
            <ArrowIcon source={arrowLeft} />
          </Button>
        ) : undefined}
        <Title>{title}</Title>
      </ViewButtons>
      <ViewButtons>
        {screen === 'SavedResults' ? undefined : (
          <Button onPress={navigateToSavedResults}>
            <Icon source={listIcon} />
          </Button>
        )}

        <Button onPress={navigateToSearch}>
          <Icon source={searchIcon} />
        </Button>
        {screen === 'About' ? undefined : (
          <Menu
            ref={menuRef}
            button={
              <Button onPress={() => menuRef.current?.show()}>
                <Icon source={menuIcon} />
              </Button>
            }>
            <MenuItem onPress={navigateToAbout}>Sobre</MenuItem>
          </Menu>
        )}
      </ViewButtons>
    </Container>
  );
};

export default Header;
