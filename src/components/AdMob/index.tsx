import React from 'react';
import {BannerAd, TestIds, BannerAdSize} from '@react-native-firebase/admob';

import {Container} from './styles';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-3163868750666019~9703837345';

const AbMob: React.FC = () => (
  <Container>
    <BannerAd unitId={adUnitId} size={BannerAdSize.SMART_BANNER} />
  </Container>
);

export default AbMob;
