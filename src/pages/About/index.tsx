import React from 'react';

import Header from '../../components/Header';

import {gonuvem, filledHeart} from '../../general/images';

import {
  Container,
  ImgLogo,
  TextAbout,
  Footer,
  TextFooter,
  GonuvemLogo,
  Content,
  Label,
  Reference,
  ViewRefrence,
  Heart,
} from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Header title="Sobre" showCloseButton screen="About" />
      <Content>
        <ImgLogo />
        <TextAbout>
          O **NOME APP** é um aplicativo voltado para os profissionais da área
          da saúde e se propõe a ser uma ferramenta, inteiramente desenvolvida
          em português, no auxílio do cálculo do estadiamento de cancêres.
        </TextAbout>
        <ViewRefrence>
          <Label>Fonte de Dados</Label>
          <Reference>AJCC Staging Cancer Manual</Reference>
        </ViewRefrence>
        <Footer>
          <TextFooter>
            Desenvolvido com <Heart source={filledHeart} /> por{' '}
          </TextFooter>
          <GonuvemLogo source={gonuvem} />
        </Footer>
      </Content>
    </Container>
  );
};

export default About;
