import React from 'react';
import {View} from 'react-native';
import AppName from './AppName';
import styles from './styles';
import options from '../../core/options';

function Logo(): JSX.Element {
  const {Icon} = options;

  return (
    <View style={styles.containerIconAppName}>
      <Icon />
      <AppName />
    </View>
  )
}

export default Logo;
