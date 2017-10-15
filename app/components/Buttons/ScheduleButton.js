import React, {PropTypes } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const ScheduleButton = ( {onPress} ) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon2} source={require('./images/Schedule.png')} />

    </View>
  </TouchableOpacity>
);

ScheduleButton.propTypes = {
  onPress: PropTypes.func,
};

export default ScheduleButton;
