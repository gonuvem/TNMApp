import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CancerList from '../pages/CancerList';

const Stack = createStackNavigator();

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={CancerList} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Router;
