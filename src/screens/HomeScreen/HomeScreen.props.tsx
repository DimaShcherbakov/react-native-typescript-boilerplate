import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { HomeScreen } from './HomeScreen.component';

export const HomeScreenWithProps = () => {
  const { navigate } = useNavigation();
  const props = {
    navigate,
  };

  return <HomeScreen {...props} />;
}
