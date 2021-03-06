import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
// import CurrencyList from './screens/CurrencyList';
// import Options from './screens/Options';
// import Themes from './screens/Themes';
import Navigator from './config/routes';
import { AlertProvider } from './Components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputTextColor: '#797979',
  $inputDisabled: '#EEEEEE',
  $darkText: '#343434',
  // $outline: 1,
});

export default () => <AlertProvider><Navigator /></AlertProvider>;
