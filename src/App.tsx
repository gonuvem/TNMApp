import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';

import {colors} from './general/colors';
import Router from './router';

const App: React.FC = () => {
  // useEffect(() => {
  //   admob()
  //     .setRequestConfiguration({
  //       // Update all future requests suitable for parental guidance
  //       maxAdContentRating: MaxAdContentRating.PG,

  //       // Indicates that you want your content treated as child-directed for purposes of COPPA.
  //       tagForChildDirectedTreatment: true,

  //       // Indicates that you want the ad request to be handled in a
  //       // manner suitable for users under the age of consent.
  //       tagForUnderAgeOfConsent: true,
  //     })
  //     .then(() => {
  //       // Request config successfully set!
  //     });
  // }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Router />
    </>
  );
};

export default App;
