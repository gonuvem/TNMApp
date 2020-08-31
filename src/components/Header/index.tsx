import React from 'react';

import {Container, Title, ViewButtons, Button, Icon} from './styles';

import {listIcon, searchIcon, menuIcon} from '../../general/images';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Lista de cânceres</Title>
      <ViewButtons>
        <Button>
          <Icon source={listIcon} />
        </Button>
        <Button>
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
