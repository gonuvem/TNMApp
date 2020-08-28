import React from 'react';

import Header from '../../components/Header';
import AdMob from '../../components/AdMob';

import { Container, Label, Option, Separator, List } from './styles';

const cancerList = [
  { label: 'C', options: ["Colón e Reto", "Colón e Reto"] },
  { label: 'M', options: ["Mama"] },
  { label: 'P', options: ["Próstata"] },
]

const CancerList: React.FC = (navigation) => {
  return (
    <>
      <Container>
        <Header />
        <List>
          {cancerList.map(cancer =>
            <>
              <Label>{cancer.label}</Label>
              {cancer.options.map(name =>
                <>
                  <Option>{name}</Option>
                  <Separator />
                </>
              )}
            </>
          )}
        </List>
      </Container>
      <AdMob />
    </>
  );
};

export default CancerList;
