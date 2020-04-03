import React from 'react';
import { Provider } from 'mobx-react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation';
import { RootState } from './src/configs/persist-state-management';

const App: () => React$Node = () => {
  return (
    <Provider {...RootState}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
