import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';


EStyleSheet.build({
  $primaryWhite: '#f5f5f5',
  $black: '000000',
  $plainWhite: 'FFFFFF',
})

export default () => <Home />;
