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
      <Stack.Screen name="CancerDetail" component={CancerDetail} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen
        name="SavedResults"
        component={SavedResult}
        options={{
          cardStyleInterpolator: forFade,
          transitionSpec: {
            open: configAnimation,
            close: configAnimation,
          },
        }}
      />
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
