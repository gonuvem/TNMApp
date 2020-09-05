import * as React from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CancerList from '../pages/CancerList';
import Search from '../pages/Search';
import SavedResult from '../pages/SavedResults';

const Stack = createStackNavigator();

const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const configAnimation = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.linear,
  },
};

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={CancerList} />
      <Stack.Screen name="SavedResults" component={SavedResult} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          cardStyleInterpolator: forFade,
          transitionSpec: {
            open: configAnimation,
            close: configAnimation,
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Router;
