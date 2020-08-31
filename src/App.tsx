import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {colors} from './general/colors';
import Router from './router';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Router />
    </>
  );
};

export default App;
