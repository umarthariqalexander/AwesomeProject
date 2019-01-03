import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputTextColor: '#797979',
  $inputDisabled: '#EEEEEE',
  $outline: 1,
});

export default () => <Home />;
