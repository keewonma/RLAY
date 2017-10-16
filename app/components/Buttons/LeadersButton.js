import React, {PropTypes } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const Leaders = ( {onPress} ) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/Leaders.png')} />

    </View>
  </TouchableOpacity>
);

Leaders.propTypes = {
  onPress: PropTypes.func,
};

export default Leaders;
