import React, {PropTypes } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';
const DevoButton = ( onPress ) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Image source={require('./images/Devo.png')} />
    </View>
  </TouchableOpacity>
);

DevoButton.propTypes = {
  onPress: PropTypes.func,
}
