import React from 'react';
import { Stack } from '../constants/navigation';
import { HomeScreenWithProps as HomeScreen } from '../screens/HomeScreen'

export const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
)
