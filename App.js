import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main screens from './screens/Main screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main screens">
          <Stack.Screen name="Main screens" component={Main screens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}