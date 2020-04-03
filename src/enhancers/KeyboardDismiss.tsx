import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

interface Props {
  children: React.ReactElement<any, string>;
}
export const KeyboardDismiss = ({ children }: Props) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
