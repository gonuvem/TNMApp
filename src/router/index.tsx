import * as React from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CancerList from '../pages/CancerList';
import Search from '../pages/Search';
import CancerDetail from '../pages/CancerDetail';
import SavedResult from '../pages/SavedResults';
import About from '../pages/About';

const Stack = createStackNavigator();

const opacityTransition: object = {
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        // duration: 500,
        easing: Easing.linear,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({current}: {current: {progress: number}}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={CancerList} />
      <Stack.Screen name="CancerDetail" component={CancerDetail} />
      <Stack.Screen
        name="About"
        component={About}
        options={opacityTransition}
      />
      <Stack.Screen
        name="SavedResults"
        component={SavedResult}
        options={opacityTransition}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={opacityTransition}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Router;
