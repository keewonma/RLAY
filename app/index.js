import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Devo from './screens/Devo';


EStyleSheet.build({
  $primaryWhite: '#f5f5f5',
  $black: '000000',
  $plainWhite: 'FFFFFF',
});

export default () => <Devo />;
